// ฟังก์ชันเปิด Modal และเอารูปที่คลิกมาแสดง
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// ปิดรูปเมื่อกดปุ่ม ESC บนคีย์บอร์ด
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});