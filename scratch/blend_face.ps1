Add-Type -AssemblyName System.Drawing

$heroPath = "c:\Code\CLI\Fher\public\fher_hero.png"
$facePath = "c:\Code\CLI\Fher\public\Fer\F (12).jpeg"

$heroImg = [System.Drawing.Bitmap]::FromFile($heroPath)
$faceImg = [System.Drawing.Bitmap]::FromFile($facePath)

# Create result canvas matching hero size
$result = New-Object System.Drawing.Bitmap($heroImg.Width, $heroImg.Height)
$g = [System.Drawing.Graphics]::FromImage($result)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

# Draw background hero body
$g.DrawImage($heroImg, 0, 0, $heroImg.Width, $heroImg.Height)

# Crop face area from Fer photo (F (12).jpeg is 1024x1024 approx or similar)
# We crop the head area (face with glasses & smile)
$cropX = [int]($faceImg.Width * 0.25)
$cropY = [int]($faceImg.Height * 0.08)
$cropW = [int]($faceImg.Width * 0.50)
$cropH = [int]($faceImg.Height * 0.45)

$faceCrop = New-Object System.Drawing.Bitmap($cropW, $cropH)
$fg = [System.Drawing.Graphics]::FromImage($faceCrop)
$fg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$fg.DrawImage($faceImg, (New-Object System.Drawing.Rectangle(0,0,$cropW,$cropH)), (New-Object System.Drawing.Rectangle($cropX,$cropY,$cropW,$cropH)), [System.Drawing.GraphicsUnit]::Pixel)
$fg.Dispose()

# Create alpha mask for soft oval feathering
$mask = New-Object System.Drawing.Bitmap($cropW, $cropH)
for ($y=0; $y -lt $cropH; $y++) {
    for ($x=0; $x -lt $cropW; $x++) {
        $dx = ($x - $cropW/2) / ($cropW/2)
        $dy = ($y - $cropH/2) / ($cropH/2)
        $dist = [Math]::Sqrt($dx*$dx + $dy*$dy)
        $alpha = 1.0
        if ($dist -gt 0.6) {
            $alpha = 1.0 - (($dist - 0.6) / 0.4)
            if ($alpha -lt 0) { $alpha = 0 }
        }
        $c = $faceCrop.GetPixel($x, $y)
        $mask.SetPixel($x, $y, [System.Drawing.Color]::FromArgb([int]($c.A * $alpha), $c.R, $c.G, $c.B))
    }
}

# Target position on the hero suit image head area
$targetX = [int]($heroImg.Width * 0.38)
$targetY = [int]($heroImg.Height * 0.08)
$targetW = [int]($heroImg.Width * 0.26)
$targetH = [int]($heroImg.Height * 0.24)

$g.DrawImage($mask, (New-Object System.Drawing.Rectangle($targetX, $targetY, $targetW, $targetH)))

$g.Dispose()
$heroImg.Dispose()
$faceImg.Dispose()
$faceCrop.Dispose()
$mask.Dispose()

$outputPath = "c:\Code\CLI\Fher\public\fher_hero.png"
$result.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$result.Dispose()

Write-Host "Blended excited face successfully into $outputPath"
