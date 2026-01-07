@echo off
echo ========================================
echo Downloading Car Images from Pexels
echo ========================================
echo.

cd /d "%~dp0"

REM Diagonal images - pairs of cars
curl -L "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-1-left.jpg"
curl -L "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-1-right.jpg"

curl -L "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-2-left.jpg"
curl -L "https://images.pexels.com/photos/3849506/pexels-photo-3849506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-2-right.jpg"

curl -L "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-3-left.jpg"
curl -L "https://images.pexels.com/photos/3849339/pexels-photo-3849339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-3-right.jpg"

curl -L "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-4-left.jpg"
curl -L "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-4-right.jpg"

curl -L "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-5-left.jpg"
curl -L "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600" -o "images/diagonal/car-5-right.jpg"

REM Gallery images
curl -L "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/bmw-m4-tuned.jpg"
curl -L "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/audi-rs6-performance.jpg"
curl -L "https://images.pexels.com/photos/3849506/pexels-photo-3849506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/mercedes-c63-amg.jpg"
curl -L "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/porsche-911-turbo.jpg"
curl -L "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/ford-mustang-gt.jpg"
curl -L "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/nissan-gtr-r35.jpg"
curl -L "https://images.pexels.com/photos/3849339/pexels-photo-3849339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/lamborghini-huracan.jpg"
curl -L "https://images.pexels.com/photos/2648531/pexels-photo-2648531.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/tesla-model-s.jpg"
curl -L "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800" -o "images/gallery/mclaren-720s.jpg"

REM Avatars
curl -L "https://i.pravatar.cc/200?img=12" -o "images/avatars/client-1.jpg"
curl -L "https://i.pravatar.cc/200?img=5" -o "images/avatars/client-2.jpg"
curl -L "https://i.pravatar.cc/200?img=33" -o "images/avatars/client-3.jpg"
curl -L "https://i.pravatar.cc/200?img=9" -o "images/avatars/client-4.jpg"
curl -L "https://i.pravatar.cc/200?img=68" -o "images/avatars/client-5.jpg"
curl -L "https://i.pravatar.cc/200?img=15" -o "images/avatars/client-6.jpg"

echo.
echo ========================================
echo Download Complete!
echo ========================================
pause
