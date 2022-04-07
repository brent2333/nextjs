import nc from 'next-connect'
// general-use functions
const get = (value) => (typeof value !== undefined ? value : false);
const getSysAccountId = (account = false, company = false) =>
  !!account && !!company ? `${account}_${company}_1` : ``;

//
const cardAPIURL = 'https://card-eapi-dev.us-ea1-01.api.fleetcor.com/api/v1/cards';
const handler = nc()
  .post((req, res) => {
    const tokenEndpoint = 'https://security-eapi-qa.us-ea1-01.api.fleetcor.com/api/v1/app/token';
    const tokenOptions = {
      'method': 'POST',
      'url': 'https://security-eapi-qa.us-ea1-01.api.fleetcor.com/api/v1/app/token',
      'headers': {
        'Content-Type': 'application/json',
        'Cookie': 'incap_ses_239_2375492=dZjGcCyuG28wlDG5cxlRA9ZBT2IAAAAA+XdXSSJ38QRgaLeqmFdIBA==; nlbi_2375492=aNaADiUwhigOoFRj9cy8+wAAAAAh0sYfB7HyHuzeDbO4T/GJ; visid_incap_2375492=lEjZwSCxQiyctOs5LoQ+oD6ATGIAAAAAQUIPAAAAAAB4aJoaTlSZT+L0/kI6JDc8'
      },
      body: JSON.stringify({
        "client_id": "0oa3rv4v5vlMbzR9o0x7",
        "client_secret": "6tRlAYhnUwH9TqQVVNUCqrCzcs3B4_4SbDrMWA03",
        "grant_type": "client_credentials"
      })
    
    }
      const token = fetch(tokenEndpoint, tokenOptions).then(t => console.log('token', t));   

    const testBody = {
      "sysAccountId": "2127449_21080_1",
      "fleetId": "2161341",
      "profileId": "2581360",
      "cardDescription": "test3",
      "cardNumber": "1",
      "cardType": "v",
      "expiryDate": "31-DEC-24",
      "issuedDate": "29-MAR-22",
      "status": "A",
      "reqAddr2": "999999",
      "reqAttention": "CAROL ELDAM",
      "reqAddr1": "10037 EXPRESS HWY",
      "reqCity": "OSCEOLA",
      "reqState": "IN",
      "reqZip": "46529",
      "reqCountry": "USA",
      "reqDate": "29-MAR-2022",
      "deliveryMethod": "express",
      "deliveryFee": "30",
      "userId": "999",
      "vin": "200",
      "licPlate": "78AD",
      "deptId": "1",
      "deptName": "crm",
      "subDept": "1"
    }

    const map = (p) => ({
      sysAccountId:  "2127449_21080_1",
      fleetId: "180018",
      profileId: get(p['profile']),
      cardDescription: get(p['vehicle-name']),
      cardNumber: get(p['vehicle-number']),
      status: "A", // TODO should new card always be set to "A"? (which stands for... Active?)
      reqAttention: "CAROL ELDAM",
      reqAddr1: "10037 EXPRESS HWY",
      reqAddr2: '99999',
      reqCity:  "OSCEOLA",
      reqState: "IN",
      reqZip: "46529",
      reqCountry: "USA",
      reqDate: "29-MAR-2022", // now, MM/DD/YYYY
      deliveryMethod: "4", // this is an int: ok for now, but this may change
      userId: "999",
      // deptId: get(p.Department.DeptId),
      // deptName: get(p.Department.DeptName),
      deptId: '1',
      deptName: 'crm',
      licPlate: "78AD",
      vin: "200",
      cardType: "v"
    });
    const payload = JSON.parse(JSON.stringify(req.body))
    payload.FNAccountNumber = "2100664";
    payload.collectingCompanyNumber = "99123";
    payload.user = {};
    payload.user.email = "test@test.com";
    payload.Fleet = {};
    payload.FleetId = "2133718";
    const required = [
      "sysAccountId",
      "fleetId",
      "profileId",
      "cardDescription",
      "cardNumber",
      "status",
      "reqAttention",
      "reqAddr1",
      "reqAddr2",
      "reqCity",
      "reqState",
      "reqZip",
      "reqDate",
      "deliveryMethod",
      "userId",
    ];
    let testPayload = Object.create(null);
    required.forEach(r => {
      console.log('reqforeach', r, map(payload)[r]);
      testPayload[r] = map(payload)[r]
    });
    const testPayloadStr = JSON.stringify(testPayload);
    console.log('testPayload', testPayload, testPayloadStr);
    // const transFunc = (payload, map, required) => {
    //   const respObj = {
    //     FNAccountNumber: "2100664",
    //     collectingCompanyNumber: "99123",
    //     User: "test@test.com",
    //     Fleet: {},
    //     FleetId: "2133718"
    //   };
    //   required.forEach(r => {
    //     //respObj[r] = map(payload)[r]
    //     console.log('REQ FOREACH', respObj[r]);
    //   });
    //   // console.log('RESP OBJ', respObj);
    //   return respObj;
    // }
    // const trans = transFunc(payload, map, required);
    // console.log('TRANS', trans);
    const cardPost = fetch(cardAPIURL, {
        'body': JSON.stringify(testBody),
        'method': 'POST',
        'url': 'https://card-eapi-dev.us-ea1-01.api.fleetcor.com/api/v1/cards',
        'headers': {
          'Content-Type': 'application/json',
          'Cookie': 'incap_ses_1340_2706491=BsjEL00m6xhsY5IfTaOYErYJRWIAAAAAaMy0ALhCUymHDCs/TxAwnw==; nlbi_2706491=UnrZdE4NB0WlMnan1B5gtwAAAABgNw2l8Z7t96pRTjScTDXb; visid_incap_2706491=L63iSIsjSFql4knkjMfSFXQ7HWIAAAAAQUIPAAAAAABebNf95IkuAlJWYSDXsBFb; visid_incap_2735081=AO1ZAmWJQEC0ArvJ2oxKQmgjIGIAAAAAQUIPAAAAAAA8wWpdw/ILLGugWH0yynkj; incap_ses_1340_2375492=8dZKN0g1cACZwXcfTaOYEl7nRGIAAAAAMM+BDGjnSXfKtjEkzyL5HA==; incap_ses_480_2375492=mYuKceyP3kdJUU0RGE6pBocYRmIAAAAAoPsBYjbfMOq20gsYaIascA==; nlbi_2375492=F/PLcQS5Bmb2oOjr9cy8+wAAAAAxp/w0uXjgnGwJYc2vN2RG; visid_incap_2375492=tQ2uGEYoQomDi6EEJLhF1Of+PWIAAAAAQUIPAAAAAACtSMIRCymgzC3dDRAo8sX4; incap_ses_239_2375492=BLLdQdEVGUon4De5cxlRAzlJT2IAAAAAfcYebf5vgxY82Ky3i1Xw7w==; nlbi_2375492=aNaADiUwhigOoFRj9cy8+wAAAAAh0sYfB7HyHuzeDbO4T/GJ; visid_incap_2375492=lEjZwSCxQiyctOs5LoQ+oD6ATGIAAAAAQUIPAAAAAAB4aJoaTlSZT+L0/kI6JDc8',
          'Authorization': 'Bearer eyJraWQiOiJkU01PUUd0UUJINWg4T1N2VGpHWVR6RFBnem9wRHEyb0dtRFE4YXR6aVdVIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULl8yeFpOWjdWNnVTN2pEek9WU2c1NWN4b0FlWlRGX2Y0YjFzNWlRYWpuUlUiLCJpc3MiOiJodHRwczovL2ZsZWV0Y29yLWljZC5va3RhcHJldmlldy5jb20vb2F1dGgyL2F1czJsMGQ5MWlyYm90Ynk4MHg3IiwiYXVkIjoiQ2xpZW50IEFwcGxpY2F0aW9uIiwiaWF0IjoxNjQ5MzYxMzY2LCJleHAiOjE2NDkzNjQ5NjYsImNpZCI6IjBvYTNydjR2NXZsTWJ6UjlvMHg3Iiwic2NwIjpbIm11bGVzY29wZSJdLCJjbGllbnRfYXBwX3R5cGUiOiJJbnRlcm5hbCIsInN1YiI6IjBvYTNydjR2NXZsTWJ6UjlvMHg3IiwiY2xpZW50X2FwcF9pZCI6IlVDWCJ9.bKqCpxFbSf1frAu-811KhWTLf5J5d8oYGF7G0OUKCzBHGqqj_AozyjGP9EeE5e9NV-HI5TxLxHnRveQ1sglkbHunJIF391vrkEVW-vt_AqDK1XKAEgPv01QNxHhLvtsSPnrosHnzakHUEzOZCQwDU9S9vHj04yu_BWbU-r5Nld5yBGws57fmrniNyGhr2y3eQDByPWBIsJm4SIF4GLY4gJIJONZgCWvnTVP1Q33TGVdmwINs11ZQmxmVqTzyA_-bYo1INsi-1QfkjxVGt0FBfr4ylfs3WgFZqr84nR0QkS27npttN-cCwT6mVv5YlnB76EvE_Eg-sxnyNq63fQQHQw'
        }
    }).then(res => {
      console.log('RESULT', res);
    })
    // console.log
    res.json({data: req.body})
  })

export default handler