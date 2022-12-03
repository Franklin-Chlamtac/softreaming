import { useNavigate } from "react-router-dom";
import { ProfileType } from "../../../types/ProfileType";
import { ProfileBox, ProfileImage, ProfileImageWrapper, ProfileName } from "./style";

const ProfileBanner = ({
    id,
    profileName,
    profileUrlImage
}: ProfileType) => {
    const navigate = useNavigate();


    const profileToStore = { id, profileName, profileUrlImage };

    const navigateToMovies = () => {
        navigate('/filmes');
    }

    return (
        <ProfileBox key={id} onClick={navigateToMovies}>
            <ProfileImageWrapper>
                <ProfileImage src={profileUrlImage}/>
                <ProfileName>
                    {profileName}
                </ProfileName>
            </ProfileImageWrapper>
        </ProfileBox>
    )

}

export default ProfileBanner;