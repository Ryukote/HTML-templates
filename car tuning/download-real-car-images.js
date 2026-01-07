// Download Real Car Tuning Images from Direct URLs
// This script uses specific Unsplash IDs for real tuned car photos

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

// Real car images with specific Unsplash photo IDs
const images = [
    // Diagonal split images - High quality tuned cars
    {
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-1-left.jpg',
        description: 'BMW M Performance'
    },
    {
        url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-1-right.jpg',
        description: 'Mercedes AMG GT'
    },
    {
        url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f1f3e?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-2-left.jpg',
        description: 'Audi RS Performance'
    },
    {
        url: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-2-right.jpg',
        description: 'Porsche 911 Turbo'
    },
    {
        url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-3-left.jpg',
        description: 'Nissan GT-R'
    },
    {
        url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-3-right.jpg',
        description: 'Lamborghini Huracan'
    },
    {
        url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-4-left.jpg',
        description: 'Ferrari F8'
    },
    {
        url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-4-right.jpg',
        description: 'McLaren 720S'
    },
    {
        url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-5-left.jpg',
        description: 'Chevrolet Corvette'
    },
    {
        url: 'https://images.unsplash.com/photo-1584345604476-8ec5f1f69e07?w=1200&h=1600&fit=crop',
        filename: 'diagonal/car-5-right.jpg',
        description: 'Ford Mustang GT'
    },

    // Gallery images - Various high-performance cars
    {
        url: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=800&fit=crop',
        filename: 'gallery/bmw-m4-tuned.jpg',
        description: 'BMW M4 Competition'
    },
    {
        url: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=1200&h=800&fit=crop',
        filename: 'gallery/audi-rs6-performance.jpg',
        description: 'Audi RS6 Avant'
    },
    {
        url: 'https://images.unsplash.com/photo-1618843479619-d3d3f3f2e1e7?w=1200&h=800&fit=crop',
        filename: 'gallery/mercedes-c63-amg.jpg',
        description: 'Mercedes-AMG C63'
    },
    {
        url: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop',
        filename: 'gallery/porsche-911-turbo.jpg',
        description: 'Porsche 911 Turbo S'
    },
    {
        url: 'https://images.unsplash.com/photo-1547744152-14d985cb937d?w=1200&h=800&fit=crop',
        filename: 'gallery/ford-mustang-gt.jpg',
        description: 'Ford Mustang Shelby'
    },
    {
        url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=800&fit=crop',
        filename: 'gallery/nissan-gtr-r35.jpg',
        description: 'Nissan GT-R R35'
    },
    {
        url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&h=800&fit=crop',
        filename: 'gallery/lamborghini-huracan.jpg',
        description: 'Lamborghini Huracan'
    },
    {
        url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&h=800&fit=crop',
        filename: 'gallery/tesla-model-s.jpg',
        description: 'Tesla Model S Plaid'
    },
    {
        url: 'https://images.unsplash.com/photo-1611821064430-c33c873b686d?w=1200&h=800&fit=crop',
        filename: 'gallery/mclaren-720s.jpg',
        description: 'McLaren 720S'
    },

    // Avatar images (client photos)
    {
        url: 'https://i.pravatar.cc/200?img=12',
        filename: 'avatars/client-1.jpg',
        description: 'Client 1'
    },
    {
        url: 'https://i.pravatar.cc/200?img=5',
        filename: 'avatars/client-2.jpg',
        description: 'Client 2'
    },
    {
        url: 'https://i.pravatar.cc/200?img=33',
        filename: 'avatars/client-3.jpg',
        description: 'Client 3'
    },
    {
        url: 'https://i.pravatar.cc/200?img=9',
        filename: 'avatars/client-4.jpg',
        description: 'Client 4'
    },
    {
        url: 'https://i.pravatar.cc/200?img=68',
        filename: 'avatars/client-5.jpg',
        description: 'Client 5'
    },
    {
        url: 'https://i.pravatar.cc/200?img=15',
        filename: 'avatars/client-6.jpg',
        description: 'Client 6'
    }
];

// Download function
function downloadImage(url, filepath, description) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);

        const protocol = url.startsWith('https') ? https : require('http');

        protocol.get(url, (response) => {
            // Follow redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, filepath, description)
                    .then(resolve)
                    .catch(reject);
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
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
    console.log('  Real Car Images - Download');
    console.log('========================================\n');
    console.log('Downloading high-quality car photos...\n');

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
            // Add delay between downloads
            await new Promise(resolve => setTimeout(resolve, 500));
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
    console.log('\nImages organized in:');
    console.log('  - images/diagonal/ (hero split)');
    console.log('  - images/gallery/ (carousel)');
    console.log('  - images/avatars/ (testimonials)');
    console.log('\nAll images from Unsplash (free to use)');
}

// Run the download
downloadAll().catch(console.error);
