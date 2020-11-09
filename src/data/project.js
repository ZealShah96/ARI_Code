export function getDataProjects() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id":"237ee1c4-b7e0-ea11-bf21-00155d7dc5da",
            "fields":["humber_name","humber_projectdescription","humber_funder"]
        })
    };
    return new Promise((resolve,reject)=>{
        fetch('https://prod-18.canadacentral.logic.azure.com:443/workflows/27c8d46959f840bab5c45cdd8b8b8b90/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Px9aiDcbvdkxjydZ-ncK85kOBaGig2w1WwUsQt7-8nM', requestOptions)
        .then(response => response.json())
        .then(data => resolve(data));
    });
  }