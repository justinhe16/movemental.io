// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let space = {
  "id": "chaotic3spaceset",
  "videoLink": "https://www.youtube.com/watch?v=B3Bo9_8walM?autoplay=1&rel=0",
  "videoType": "youtube",
  "annotations": [
    {
      "startTime":"0:15",
      "endTime":"0:30",
      "content":"During this time im popping off"
    },
    {
      "startTime":"1:21",
      "endTime":"2:15",
      "content":"This piece was straight flames"
    },
    {
      "startTime":"2:30",
      "endTime":"4:00",
      "content":"Eh"
    }
  ]
};

async function getSampleAnnotation() {
  return space;
}

export {
  getSampleAnnotation,
}
