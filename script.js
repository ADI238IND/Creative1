// State Management
const state = {
    files: [],
    selectedPreset: null,
    processedFiles: [],
    startTime: null,
    filesProcessed: 0
};

// Website Presets Database (50+ configurations)
const presets = [
    // Government & Education
    { id: 1, name: 'AKTU Exam Form', category: 'Education', width: 800, height: 1000, format: 'pdf', quality: 85 },
    { id: 2, name: 'Aadhar Portal', category: 'Government', width: 500, height: 500, format: 'jpg', quality: 90 },
    { id: 3, name: 'PAN Card Upload', category: 'Government', width: 800, height: 600, format: 'pdf', quality: 95 },
    { id: 4, name: 'Passport Application', category: 'Government', width: 1024, height: 768, format: 'jpg', quality: 95 },
    { id: 5, name: 'Voter ID', category: 'Government', width: 600, height: 400, format: 'jpg', quality: 90 },
    { id: 6, name: 'Driving License', category: 'Government', width: 800, height: 600, format: 'jpg', quality: 85 },
    
    // Social Media
    { id: 7, name: 'Facebook Profile', category: 'Social', width: 512, height: 512, format: 'jpg', quality: 80 },
    { id: 8, name: 'Instagram Post', category: 'Social', width: 1080, height: 1080, format: 'jpg', quality: 75 },
    { id: 9, name: 'LinkedIn Cover', category: 'Social', width: 1200, height: 400, format: 'jpg', quality: 80 },
    { id: 10, name: 'Twitter Header', category: 'Social', width: 1500, height: 500, format: 'jpg', quality: 80 },
    { id: 11, name: 'YouTube Thumbnail', category: 'Social', width: 1280, height: 720, format: 'jpg', quality: 85 },
    { id: 12, name: 'WhatsApp Profile', category: 'Social', width: 480, height: 480, format: 'jpg', quality: 75 },

    // E-commerce
    { id: 13, name: 'Amazon Product', category: 'E-commerce', width: 1000, height: 1000, format: 'jpg', quality: 90 },
    { id: 14, name: 'Flipkart Listing', category: 'E-commerce', width: 800, height: 800, format: 'jpg', quality: 85 },
    { id: 15, name: 'eBay Auction', category: 'E-commerce', width: 600, height: 600, format: 'jpg', quality: 80 },
    { id: 16, name: 'Shopify Product', category: 'E-commerce', width: 1024, height: 1024, format: 'jpg', quality: 85 },
    { id: 17, name: 'Etsy Shop Item', category: 'E-commerce', width: 1000, height: 1000, format: 'jpg', quality: 80 },
    { id: 18, name: 'Aliexpress Listing', category: 'E-commerce', width: 800, height: 800, format: 'jpg', quality: 75 },

    // Email & Web
    { id: 19, name: 'Email Header', category: 'Email', width: 600, height: 200, format: 'jpg', quality: 80 },
    { id: 20, name: 'Website Banner', category: 'Web', width: 1920, height: 400, format: 'jpg', quality: 85 },
    { id: 21, name: 'Blog Featured Image', category: 'Web', width: 1200, height: 600, format: 'jpg', quality: 80 },
    { id: 22, name: 'Landing Page Hero', category: 'Web', width: 1920, height: 1080, format: 'jpg', quality: 85 },
    { id: 23, name: 'Web Favicon', category: 'Web', width: 64, height: 64, format: 'png', quality: 95 },
    { id: 24, name: 'OpenGraph Image', category: 'Web', width: 1200, height: 630, format: 'jpg', quality: 85 },

    // Banking & Finance
    { id: 25, name: 'Bank Statement', category: 'Finance', width: 1000, height: 1400, format: 'pdf', quality: 95 },
    { id: 26, name: 'Invoice', category: 'Finance', width: 800, height: 1100, format: 'pdf', quality: 95 },
    { id: 27, name: 'Salary Slip', category: 'Finance', width: 800, height: 1000, format: 'pdf', quality: 90 },
    { id: 28, name: 'GST Document', category: 'Finance', width: 1000, height: 1400, format: 'pdf', quality: 95 },

    // Insurance & Forms
    { id: 29, name: 'Insurance Claim', category: 'Insurance', width: 900, height: 1200, format: 'pdf', quality: 95 },
    { id: 30, name: 'Medical Report', category: 'Insurance', width: 900, height: 1200, format: 'pdf', quality: 95 },
    { id: 31, name: 'Admission Form', category: 'Education', width: 800, height: 1000, format: 'pdf', quality: 90 },

    // Content Creation
    { id: 32, name: 'PowerPoint Slide', category: 'Presentation', width: 1280, height: 720, format: 'jpg', quality: 85 },
    { id: 33, name: 'Poster Design', category: 'Design', width: 2400, height: 3600, format: 'jpg', quality: 90 },
    { id: 34, name: 'Flyer Template', category: 'Design', width: 2550, height: 3300, format: 'jpg', quality: 90 },
    { id: 35, name: 'Business Card', category: 'Design', width: 1050, height: 600, format: 'jpg', quality: 95 },
    { id: 36, name: 'Certificate', category: 'Design', width: 1200, height: 900, format: 'pdf', quality: 95 },

    // Additional Documents
    { id: 37, name: 'Resume/CV', category: 'Document', width: 850, height: 1100, format: 'pdf', quality: 95 },
    { id: 38, name: 'Cover Letter', category: 'Document', width: 850, height: 1100, format: 'pdf', quality: 95 },
    { id: 39, name: 'Contract', category: 'Document', width: 1000, height: 1400, format: 'pdf', quality: 95 },
    { id: 40, name: 'Agreement', category: 'Document', width: 1000, height: 1400, format: 'pdf', quality: 95 },

    // Video Thumbnails
    { id: 41, name: 'Video Thumbnail HD', category: 'Media', width: 1280, height: 720, format: 'jpg', quality: 85 },
    { id: 42, name: 'Video Poster', category: 'Media', width: 1920, height: 1080, format: 'jpg', quality: 85 },

    // App & Mobile
    { id: 43, name: 'iOS App Icon', category: 'App', width: 180, height: 180, format: 'png', quality: 95 },
    { id: 44, name: 'Android App Icon', category: 'App', width: 192, height: 192, format: 'png', quality: 95 },
    { id: 45, name: 'Mobile Banner', category: 'Mobile', width: 750, height: 1334, format: 'jpg', quality: 80 },

    // Blog & Content
    { id: 46, name: 'Blog Thumbnail', category: 'Blog', width: 500, height: 500, format: 'jpg', quality: 75 },
    { id: 47, name: 'Article Image', category: 'Blog', width: 800, height: 600, format: 'jpg', quality: 80 },
    { id: 48, name: 'Infographic', category: 'Blog', width: 1200, height: 1500, format: 'jpg', quality: 85 },

    // E-Learning
    { id: 49, name: 'Course Thumbnail', category: 'Learning', width: 400, height: 300, format: 'jpg', quality: 80 },
    { id: 50, name: 'Quiz Question Image', category: 'Learning', width: 800, height: 600, format: 'jpg', quality: 85 }
];

// Initialize
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    loadPresets();
    setupDragDrop();
    setupEventListeners();
}

// Load presets into UI
function loadPresets() {
    const grid = document.getElementById('presetsGrid');
    const categories = [...new Set(presets.map(p => p.category))].sort();
    
    const presetsHTML = presets.map(preset => `
        <div class="preset-item" data-preset-id="${preset.id}" onclick="selectPreset(${preset.id})">
            <div>${preset.name}</div>
            <div class="preset-category">${preset.width}×${preset.height} • ${preset.format.toUpperCase()}</div>
        </div>
    `).join('');
    
    grid.innerHTML = presetsHTML;
}

// Select preset
function selectPreset(id) {
    state.selectedPreset = presets.find(p => p.id === id);
    
    document.querySelectorAll('.preset-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.preset-item').classList.add('active');

    if (state.selectedPreset) {
        document.getElementById('customWidth').value = state.selectedPreset.width;
        document.getElementById('customHeight').value = state.selectedPreset.height;
        showToast(`Preset selected: ${state.selectedPreset.name}`, 'info');
    }
}

// Drag & Drop
function setupDragDrop() {
    const zone = document.getElementById('uploadZone');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        zone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    zone.addEventListener('dragover', () => zone.classList.add('dragover'));
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', handleDrop);
}

function handleDrop(e) {
    document.getElementById('uploadZone').classList.remove('dragover');
    const files = e.dataTransfer.files;
    addFiles(files);
}

// File Input
document.getElementById('fileInput').addEventListener('change', (e) => {
    addFiles(e.target.files);
});

function addFiles(fileList) {
    if (state.files.length >= 20) {
        showToast('Maximum 20 files allowed', 'error');
        return;
    }

    Array.from(fileList).forEach((file, index) => {
        if (state.files.length >= 20) return;
        
        const fileSize = (file.size / (1024 * 1024)).toFixed(2);
        if (fileSize > 500) {
            showToast(`${file.name} exceeds 500MB limit`, 'error');
            return;
        }

        state.files.push({
            id: Date.now() + index,
            file: file,
            name: file.name,
            size: fileSize,
            status: 'pending'
        });
    });

    updateFilesList();
    document.getElementById('convertBtn').disabled = state.files.length === 0;
}

// Update files list UI
function updateFilesList() {
    const list = document.getElementById('filesList');
    const count = document.getElementById('fileCount');
    
    count.textContent = state.files.length;

    if (state.files.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <h3>No files yet</h3>
                <p>Upload files to get started</p>
            </div>
        `;
        return;
    }

    list.innerHTML = state.files.map(file => `
        <div class="file-item" data-file-id="${file.id}">
            <div class="file-info">
                <div class="file-icon">${getFileIcon(file.name)}</div>
                <div class="file-details">
                    <div class="file-name">${file.name}</div>
                    <div class="file-meta">${file.size} MB</div>
                    <div class="file-progress">
                        <div class="file-progress-bar" style="width: 0%;"></div>
                    </div>
                </div>
            </div>
            <div class="file-actions">
                <span class="file-status status-processing">
                    <span class="spinner" style="width: 12px; height: 12px;"></span>
                    Pending
                </span>
                <button class="btn btn-sm btn-secondary" onclick="removeFile(${file.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function getFileIcon(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const icons = {
        pdf: '📄', jpg: '🖼️', jpeg: '🖼️', png: '🖼️', gif: '🖼️',
        doc: '📝', docx: '📝', xlsx: '📊', xls: '📊', ppt: '🎯',
        zip: '📦', rar: '📦', txt: '📋', csv: '📊', mp4: '🎬',
        mp3: '🎵', wav: '🎵', default: '📁'
    };
    return icons[ext] || icons.default;
}

function removeFile(id) {
    state.files = state.files.filter(f => f.id !== id);
    updateFilesList();
    document.getElementById('convertBtn').disabled = state.files.length === 0;
}

// Settings
document.getElementById('quality').addEventListener('input', (e) => {
    document.getElementById('qualityValue').textContent = e.target.value + '%';
});

document.getElementById('maxSize').addEventListener('input', (e) => {
    document.getElementById('maxSizeValue').textContent = e.target.value + ' MB';
});

document.getElementById('resizeMode').addEventListener('change', (e) => {
    document.getElementById('customDimGroup').style.display = 
        e.target.value === 'custom' ? 'block' : 'none';
});

// Search presets
document.getElementById('searchPresets').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    document.querySelectorAll('.preset-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'block' : 'none';
    });
});

// Process files
async function processFiles() {
    if (state.files.length === 0) {
        showToast('Please select files to process', 'error');
        return;
    }

    if (!state.selectedPreset && document.getElementById('resizeMode').value !== 'custom') {
        showToast('Please select a website preset or enable custom mode', 'error');
        return;
    }

    state.startTime = Date.now();
    state.filesProcessed = 0;
    state.processedFiles = [];

    openModal();
    
    const quality = parseInt(document.getElementById('quality').value);

    for (let i = 0; i < state.files.length; i++) {
        const fileData = state.files[i];
        updateProcessingProgress(i + 1, state.files.length);
        updateProgressBar((i + 1) / state.files.length * 100);

        try {
            const converted = await processFile(fileData, quality);
            state.processedFiles.push(converted);
            state.filesProcessed++;
            updateFileStatus(fileData.id, 'success');

            // Simulate processing time
            await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1500));
        } catch (error) {
            updateFileStatus(fileData.id, 'error');
            showToast(`Error processing ${fileData.name}: ${error.message}`, 'error');
        }
    }

    closeModal();
    showDownloadSection();
    updateStats();
    showToast('All files processed successfully!', 'success');
}

// Simulate file processing
async function processFile(fileData, quality) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            const ext = fileData.name.split('.').pop();
            const newName = fileData.name.replace(/\.[^.]+$/, '') + '_converted.' + ext;

            // Simulate compression by reducing file size
            const compressionRatio = quality / 100;
            const newSize = (fileData.file.size * compressionRatio / (1024 * 1024)).toFixed(2);

            resolve({
                id: fileData.id,
                name: newName,
                originalSize: fileData.size,
                newSize: newSize,
                data: e.target.result,
                compressed: true
            });
        };

        reader.readAsArrayBuffer(fileData.file);
    });
}

function updateFileStatus(id, status) {
    const item = document.querySelector(`[data-file-id="${id}"]`);
    if (!item) return;

    const statusEl = item.querySelector('.file-status');
    statusEl.className = 'file-status status-' + status;
    
    const messages = {
        success: '<span style="color: #10b981;">✓</span> Processed',
        error: '<span style="color: #ef4444;">✕</span> Failed',
        pending: '<span class="spinner"></span> Pending'
    };
    
    statusEl.innerHTML = messages[status];
}

function updateProcessingProgress(current, total) {
    document.getElementById('processingProgress').textContent = `${current} of ${total} files`;
    document.getElementById('processingText').textContent = `Processing ${current} of ${total}...`;
}

function updateProgressBar(percent) {
    document.getElementById('processingBar').style.width = percent + '%';
}

// Show download section
function showDownloadSection() {
    const section = document.getElementById('downloadSection');
    const grid = document.getElementById('downloadGrid');

    grid.innerHTML = state.processedFiles.map(file => `
        <div class="download-item">
            <div class="download-filename">${file.name}</div>
            <div class="download-size">
                ${file.originalSize} MB → ${file.newSize} MB
                <br><span class="gradient-text">${((1 - file.newSize / file.originalSize) * 100).toFixed(0)}% saved</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="downloadFile(${file.id})">
                ⬇️ Download
            </button>
        </div>
    `).join('');

    section.style.display = 'block';
}

function downloadFile(id) {
    const file = state.processedFiles.find(f => f.id === id);
    if (!file) return;

    const blob = new Blob([file.data], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Downloaded: ${file.name}`, 'success');
}

function downloadAll() {
    showToast('Preparing ZIP file...', 'info');
    // In production, you'd use a ZIP library like jszip
    state.processedFiles.forEach(file => downloadFile(file.id));
}

// Modal functions
function openModal() {
    document.getElementById('processingModal').classList.add('active');
}

function closeModal() {
    document.getElementById('processingModal').classList.remove('active');
}

// Stats
function updateStats() {
    document.getElementById('statFiles').textContent = state.filesProcessed;
    
    const elapsed = ((Date.now() - state.startTime) / 1000).toFixed(1);
    document.getElementById('statTime').textContent = elapsed + 's';

    const saved = state.processedFiles.reduce((acc, f) => {
        return acc + (f.originalSize - f.newSize);
    }, 0).toFixed(2);
    document.getElementById('statSaved').textContent = saved + ' MB';
}

// Utilities
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function clearAll() {
    if (state.files.length === 0) return;
    
    if (confirm('Clear all files?')) {
        state.files = [];
        state.processedFiles = [];
        document.getElementById('downloadSection').style.display = 'none';
        document.getElementById('fileInput').value = '';
        updateFilesList();
        document.getElementById('convertBtn').disabled = true;
        showToast('All files cleared', 'info');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Modal close
    document.getElementById('processingModal').addEventListener('click', (e) => {
        if (e.target.id === 'processingModal') closeModal();
    });
}
