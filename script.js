        // Set current date and year
        const now = new Date();
        document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
        document.getElementById('currentYear').textContent = now.getFullYear();
        
        // Set child's name (replace with your name)
        document.getElementById('childName').textContent = 'Ha-re-Ram';
        
        // Music toggle
        const musicToggle = document.getElementById('musicToggle');
        const bgMusic = document.getElementById('bgMusic');
        let musicPlaying = false;
        
        musicToggle.addEventListener('click', () => {
            if (musicPlaying) {
                bgMusic.pause();
                musicToggle.innerHTML = '<i class="fas fa-music text-xl"></i>' + 
                                        '<span class="music-note absolute -top-1 -right-1 text-xs">♪</span>' + 
                                        '<span class="music-note absolute -top-2 right-2 text-xs" style="animation-delay: 0.5s;">♪</span>';
                musicToggle.classList.remove('bg-pink-200');
                musicToggle.classList.add('bg-pink-100');
            } else {
                bgMusic.play();
                musicToggle.innerHTML = '<i class="fas fa-pause text-xl"></i>';
                musicToggle.classList.remove('bg-pink-100');
                musicToggle.classList.add('bg-pink-200');
            }
            musicPlaying = !musicPlaying;
        });
        
        // Create floating flowers
        function createFlowers() {
            const container = document.getElementById('flowers-container');
            const flowers = ['🌸', '🌺', '🌷', '🌹', '💐', '🌻', '🌼'];
            
            for (let i = 0; i < 25; i++) {
                const flower = document.createElement('div');
                flower.className = 'flower-particle';
                flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
                flower.style.left = Math.random() * 100 + 'vw';
                flower.style.animationDuration = Math.random() * 8 + 8 + 's';
                flower.style.animationDelay = Math.random() * 5 + 's';
                flower.style.fontSize = Math.random() * 20 + 15 + 'px';
                container.appendChild(flower);
            }
        }
        
        createFlowers();
        
        // Love meter animation
        document.getElementById('measureLove').addEventListener('click', function() {
            const loveMeter = document.getElementById('loveMeter');
            loveMeter.style.width = '100%';
            
            setTimeout(() => {
                this.innerHTML = 'More Than the Stars! <i class="fas fa-star ml-2"></i>';
                this.classList.add('bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
            }, 1000);
        });
        
        // Virtual hug counter
        let hugCount = 0;
        document.getElementById('sendHug').addEventListener('click', function() {
            hugCount++;
            document.getElementById('hugCounter').textContent = hugCount;
            document.getElementById('hugMessage').classList.remove('hidden');
            
            // Create floating hearts animation
            for (let i = 0; i < 10; i++) {
                const heart = document.createElement('div');
                heart.className = 'absolute text-red-500 text-xl heart-particle';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '80vh';
                heart.style.animation = `floatUp ${Math.random() * 2 + 2}s linear forwards`;
                document.body.appendChild(heart);
                
                // Remove after animation
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }
            
            setTimeout(() => {
                document.getElementById('hugMessage').classList.add('hidden');
            }, 2000);
        });
        
        // Add click effect to photos
        const photos = document.querySelectorAll('.gallery-item');
        photos.forEach(photo => {
            photo.addEventListener('click', function() {
                this.classList.add('animate-ping');
                setTimeout(() => {
                    this.classList.remove('animate-ping');
                }, 500);
            });
        });
        
        // Add floating hearts style
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);