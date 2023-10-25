export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '23.96',
        bl_lng: '54.25',
        tr_lat: '26.01',
        tr_lng: '56.02',
        limit: '300'
    },
    headers: {
      SECRET
    }
};

export const options2 = {
    headers: {
    SECRET
    }
  };
