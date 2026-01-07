// Image Download Script - Real Car Tuning Images
// This script downloads actual car images from Unsplash

const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directory structure
const dirs = [
    path.join(__dirname, 'images'),
    path.join(__dirname, 'images', 'diagonal'),
    path.join(__dirname, 'images', 'gallery'),
    path.join(__dirname, 'images', 'avatars')
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Image sources using Unsplash (real car photos)
const images = [
    // Diagonal split images (pairs of sports cars)
    {
        url: 'https://source.unsplash.com/1200x1600/?sports-car,bmw,tuning',
        filename: 'diagonal/car-1-left.jpg',
        description: 'Diagonal hero - BMW left'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?supercar,mercedes,performance',
        filename: 'diagonal/car-1-right.jpg',
        description: 'Diagonal hero - Mercedes right'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?audi,rs6,tuned',
        filename: 'diagonal/car-2-left.jpg',
        description: 'Diagonal hero - Audi left'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?porsche,911,modified',
        filename: 'diagonal/car-2-right.jpg',
        description: 'Diagonal hero - Porsche right'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?nissan,gtr,racing',
        filename: 'diagonal/car-3-left.jpg',
        description: 'Diagonal hero - Nissan GTR left'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?lamborghini,supercar,speed',
        filename: 'diagonal/car-3-right.jpg',
        description: 'Diagonal hero - Lamborghini right'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?ferrari,exotic,racing',
        filename: 'diagonal/car-4-left.jpg',
        description: 'Diagonal hero - Ferrari left'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?mclaren,hypercar,carbon',
        filename: 'diagonal/car-4-right.jpg',
        description: 'Diagonal hero - McLaren right'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?corvette,muscle-car,power',
        filename: 'diagonal/car-5-left.jpg',
        description: 'Diagonal hero - Corvette left'
    },
    {
        url: 'https://source.unsplash.com/1200x1600/?mustang,american-muscle,custom',
        filename: 'diagonal/car-5-right.jpg',
        description: 'Diagonal hero - Mustang right'
    },

    // Gallery images - various tuned cars
    {
        url: 'https://source.unsplash.com/1200x800/?bmw-m4,tuning,performance',
        filename: 'gallery/bmw-m4-tuned.jpg',
        description: 'Gallery - BMW M4 tuned'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?audi-rs6,wagon,fast',
        filename: 'gallery/audi-rs6-performance.jpg',
        description: 'Gallery - Audi RS6'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?mercedes-amg,c63,engine',
        filename: 'gallery/mercedes-c63-amg.jpg',
        description: 'Gallery - Mercedes C63 AMG'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?porsche-911,turbo,track',
        filename: 'gallery/porsche-911-turbo.jpg',
        description: 'Gallery - Porsche 911 Turbo'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?ford-mustang,v8,exhaust',
        filename: 'gallery/ford-mustang-gt.jpg',
        description: 'Gallery - Ford Mustang GT'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?nissan-gtr,r35,modified',
        filename: 'gallery/nissan-gtr-r35.jpg',
        description: 'Gallery - Nissan GT-R R35'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?lamborghini-huracan,exotic,speed',
        filename: 'gallery/lamborghini-huracan.jpg',
        description: 'Gallery - Lamborghini Huracan'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?tesla,electric,performance',
        filename: 'gallery/tesla-model-s.jpg',
        description: 'Gallery - Tesla Model S'
    },
    {
        url: 'https://source.unsplash.com/1200x800/?mclaren-720s,carbon-fiber,aerodynamic',
        filename: 'gallery/mclaren-720s.jpg',
        description: 'Gallery - McLaren 720S'
    },

    // Avatar images (keeping pravatar for people)
    {
        url: 'https://i.pravatar.cc/200?img=12',
        filename: 'avatars/client-1.jpg',
        description: 'Avatar - Client 1'
    },
    {
        url: 'https://i.pravatar.cc/200?img=5',
        filename: 'avatars/client-2.jpg',
        description: 'Avatar - Client 2'
    },
    {
        url: 'https://i.pravatar.cc/200?img=33',
        filename: 'avatars/client-3.jpg',
        description: 'Avatar - Client 3'
    },
    {
        url: 'https://i.pravatar.cc/200?img=9',
        filename: 'avatars/client-4.jpg',
        description: 'Avatar - Client 4'
    },
    {
        url: 'https://i.pravatar.cc/200?img=68',
        filename: 'avatars/client-5.jpg',
        description: 'Avatar - Client 5'
    },
    {
        url: 'https://i.pravatar.cc/200?img=15',
        filename: 'avatars/client-6.jpg',
        description: 'Avatar - Client 6'
    }
];

// Download function
function downloadImage(url, filepath, description) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            // Follow redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, filepath, description)
                    .then(resolve)
                    .catch(reject);
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded: ${description}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); // Delete the file if error
            console.error(`✗ Failed to download ${description}: ${err.message}`);
            reject(err);
        });
    });
}

// Download all images
async function downloadAll() {
    console.log('========================================');
    console.log('  Car Tuning Website - Image Download');
    console.log('========================================\n');
    console.log('Downloading real car images from Unsplash...\n');

    let downloaded = 0;
    let skipped = 0;
    let failed = 0;

    for (const image of images) {
        const filepath = path.join(__dirname, 'images', image.filename);

        // Skip if file already exists
        if (fs.existsSync(filepath)) {
            console.log(`⊘ Skipped: ${image.description} (already exists)`);
            skipped++;
            continue;
        }

        try {
            await downloadImage(image.url, filepath, image.description);
            downloaded++;
            // Add delay between downloads to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 800));
        } catch (error) {
            console.error(`✗ Error: ${image.filename} - ${error.message}`);
            failed++;
        }
    }

    console.log('\n========================================');
    console.log('  Download Complete!');
    console.log('========================================');
    console.log(`✓ Downloaded: ${downloaded} images`);
    console.log(`⊘ Skipped: ${skipped} images`);
    if (failed > 0) console.log(`✗ Failed: ${failed} images`);
    console.log('\nImages are organized in:');
    console.log('  - images/diagonal/ (hero diagonal split)');
    console.log('  - images/gallery/ (carousel gallery)');
    console.log('  - images/avatars/ (testimonials)');
    console.log('\nNote: Images are from Unsplash (free to use)');
    console.log('For production, consider using your own photos.');
}

// Run the download
downloadAll().catch(console.error);
