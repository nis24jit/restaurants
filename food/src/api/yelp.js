import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zvhddVIjSn7ighRBo_wwFkTA1x_IeXiBm9nem3dYWavYukF4S662lkas5SBUOiG02sQJ_zcGSsrp_UXl3xirdIJOcm2xMgpzLOPYtxTSYrsBkneJ6bAfMvDer8uJXnYx'
    }
});

