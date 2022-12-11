db.m.aggregate([
    {
      "$map": {
        "input": {
          "$geoNear": {
            "near": {
              "type": "Point",
              "coordinates": [6.08333, 50.775]
            },
            "distanceField": "distance",
            "key": "geolocation",
            "spherical": true
          }
        },
        "as": "city",
        "in": {
          "fall": "$$this.fall",
          "geolocation": "$$this.geolocation",
          "id": "$$this.id",
          "mass": "$$this.mass",
          "name": "$$this.name",
          "nametype": "$$this.nametype",
          "recclass": "$$this.recclass",
          "reclat": "$$this.reclat",
          "reclong": "$$this.reclong",
          "year": "$$this.year",
          "closestCity": "$$city"
        }
      }
    }
  ])
  