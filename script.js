        // This code is for the Matrix Effect.
        function createMatrixCode() {
            const matrixCode = document.getElementById('matrixCode');
            const chars = "01010101010101010101010101010101";
            const columns = Math.floor(window.innerWidth / 20);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'code-column';
                column.style.left = `${i * 20}px`;
                column.style.animationDuration = `${Math.random() * 5 + 5}s`;
                column.style.animationDelay = `${Math.random() * 5}s`;
    
                for (let j = 0; j < 30; j++) {
                    const char = document.createElement('div');
                    char.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
                    column.appendChild(char);
                }
                
                matrixCode.appendChild(column);
            }
        }

        // This is to Update Name and Role.
        document.getElementById('updateNameBtn').addEventListener('click', function() {
            const newName = prompt('Enter new name:');
            if (newName && newName.trim() !== '') {
                document.querySelector('#profileName h2').textContent = newName;
            }
        });

        document.getElementById('updateRoleBtn').addEventListener('click', function() {
            const newRole = prompt('Enter new role:');
            if (newRole && newRole.trim() !== '') {
                document.querySelector('#profileRole p').textContent = newRole;
            }
        });

        // Toggles Status functionality (Active/Inactive Button)
        document.getElementById('toggleStatusBtn').addEventListener('click', function() {
            const statusElement = document.getElementById('profileStatus');
            const body = document.body;
            
            if (statusElement.classList.contains('status-active')) {
                statusElement.classList.remove('status-active');
                statusElement.classList.add('status-inactive');
                statusElement.querySelector('p').innerHTML = '<span id="statusIndicator"></span> Inactive';
                body.classList.add('white-mode');
            } else {
                statusElement.classList.remove('status-inactive');
                statusElement.classList.add('status-active');
                statusElement.querySelector('p').innerHTML = '<span id="statusIndicator"></span> Active';
                body.classList.remove('white-mode');
            }
        });

        // This is to initialize matrix code
        createMatrixCode();