import { useNavigate } from "react-router-dom";
import { Profiles } from "../../types/Profiles";
import { ProfileCard, ProfileIcon, ProfileIconWrapper,ProfileName} from "./ProfileComponentStyle";

const ProfileBannerComponent = ({
  id,
  profileName,
  profileUrlImage,
}: Profiles) => {
  const navigate = useNavigate();

  const navigateToMovies = () => {
    navigate("/br");
  };

  return (
    <ProfileCard key={id} onClick={navigateToMovies}>
      <ProfileIconWrapper>
        <ProfileIcon src={profileUrlImage} />
        <ProfileName>{profileName}</ProfileName>
      </ProfileIconWrapper>
    </ProfileCard>
  );
};

export default ProfileBannerComponent;