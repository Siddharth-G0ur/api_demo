import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div class="flex-container space-between">
        <div
          class=" col card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div class="img-placeholder">
            <img src="https://images.unsplash.com/photo-1614130946015-d5a7a3276fea?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc5MTY4MTU&ixlib=rb-1.2.1&q=80" />
          </div>
          <div>
            <h3>Wafaa</h3>
            <p>
              <i class="fa-solid fa-user"></i> Front End Web Developer
            </p>
            <p>
              <i class="fa-solid fa-paper-plane"></i>{" "}
              <a href="mailto:wafaa_cr@outlook.com">Email Me</a>
            </p>
            <p>
              <i class="fa-solid fa-location-dot"></i> Auckland, New Zealand
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
