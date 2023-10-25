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
        'X-RapidAPI-Key': '1597dc505cmsha42df3478119679p19c087jsn8d509530546d',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};

export const options2 = {
    headers: {
      'X-RapidAPI-Key': '1597dc505cmsha42df3478119679p19c087jsn8d509530546d',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };