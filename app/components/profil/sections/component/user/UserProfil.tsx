const UserProfil: React.FC = () => (
      <section className="profil__user">
        <div className="profil__user-img-container">
          <div className="profil__user-img">
            <img src="app/src/assets/img/chat/dummyChatProfil.png" alt="Profil" />
          </div>
        </div>
        <div className="profil__user-info">
          <p>Gauthier, 23 ans</p>
        </div>
        <form
          action="#"
          method="post"
          encType="multipart/form-data"
          className="profil__user-img-form"
        >
          <input type="file" name="user_img-form" id="user_img-form" />
        </form>
      </section>
    );
export default UserProfil;