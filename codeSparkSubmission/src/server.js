import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
      banners: Model,
    },
    seeds(server) {
      server.create('banner', {
        bannerColor: 'blue',
        bannerLink: 'https://codespark.com',
        bannerText: 'This is an awesome banner',
        bannerIcon: 'https://thefoos-com2.s3.amazonaws.com/flagship/icon_desktop.png',
        startDate: '2021-01-24T19:16:00.000Z',
        endDate: '2021-01-31T19:16:00.000Z'
      });
      server.create('banner', {
        bannerColor: 'orange',
        bannerLink: 'https://codespark.com',
        bannerText: 'This is another awesome banner',
        bannerIcon: '',
        startDate: '2021-02-01T20:14:00.000Z',
        endDate: '2021-02-07T20:14:00.000Z'
      });
      server.create('banner', {
        bannerColor: 'red',
        bannerLink: 'https://codespark.com',
        bannerText: 'This is the awesome banner',
        bannerIcon: '',
        startDate: '2021-03-01T19:04:00.000Z',
        endDate: '2021-03-05T19:04:00.000Z'
      });
    },
    routes() {
      this.namespace = 'api';

      // define API endpoints here

      //get method for fetching all banner objects
      this.get('/banners', (schema, request) => {
        return schema.banners.all();
      })

      //delete route for banner objects
      this.delete("/banners/delete/:id", (schema, request) => {
        let id = request.params.id;
        return schema.banners.find(id).destroy()
      })

      //update route for banner objects
      this.patch("/banners/update/:id", (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let banner = schema.banners.find(id);
        return banner.update(attrs[id]);
      })

      let newID = 4;
      //create route for banner objects
      this.post("/banners/add", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.banners.create(attrs);
      })



    }
  });
  return server;
}
