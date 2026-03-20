// Bus API for Transport NSW
const TRANSPORT_NSW_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJPSEVRTm1MVVRNQ2xmMmo4S2NmT01yQ2tlQ2FjZlkxTU15eFRLalpsUF9VIiwiaWF0IjoxNzczOTMwMDkyfQ.cinq7SVrRMtTguh8LbJHFckgJhlgVoaaTrrvERuMZac';

export default async function handler(request, response) {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { stop = '208560' } = request.query;
  
  const url = `https://api.transport.nsw.gov.au/v1/tp/departure_mon?outputFormat=rapidJSON&coordOutputFormat=EPSG%3A4326&mode=direct&type_dm=stop&name_dm=${stop}&depArrMacro=dep&TfNSWDM=true&version=10.2.1.42`;
  
  try {
    const apiResponse = await fetch(url, {
      headers: {
        'Authorization': `apikey ${TRANSPORT_NSW_API_KEY}`,
        'Accept': 'application/json'
      }
    });
    
    const data = await apiResponse.json();
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
