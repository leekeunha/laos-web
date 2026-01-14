import { HAPPY1K_GAME_ID, HAPPY545_GAME_ID } from '../../constants/global';
import Happy545GameLogoIcon from '../icons/Happy545GameLogoIcon';

export const renderGameIcon = (gameId: number) => {
    switch (gameId) {
        case Number(HAPPY545_GAME_ID):
            return <Happy545GameLogoIcon />;

        case Number(HAPPY1K_GAME_ID):
            // Using Happy545 icon temporarily until Happy1K icon is available
            return <Happy545GameLogoIcon />;

        default:
            return null;
    }
};
