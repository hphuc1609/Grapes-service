const modal = document.querySelector(".modal");
modal.insertAdjacentHTML(
  "afterbegin",
  `
      <div class="modal-overlay">
        <div class="modal-container">
          <div class="modal-header">
            <span class="modal-logo">G . 96</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <span class="modal-btn modal-btn-prev">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span class="modal-btn modal-btn-next">
              <i class="fas fa-chevron-right"></i>
            </span>
            <div class="modal-wrapper">
              <div class="modal-slide">
                
              </div>
            </div>
          </div>
          <section class="modal-content">
            <div class="modal-gallery">
              <div class="modal-info">
                  Information
              </div>
              <div class="modal-heading">
              
              </div>
              <div class="modal-scroll-down">
                Scroll down
                <i class="fa-solid fas fas fa-angle-double-down modal-scroll-down-icon"></i>
              </div>
            </div>
            <div class="modal-intro">
               
            </div>
          </section>
        </div>
      </div>
    `
);
document.body.appendChild(modal);
