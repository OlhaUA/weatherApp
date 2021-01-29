class Storage {
  constructor() {
    this.city;
    this.code;
    this.defaultCity = 'Kyiv';
    this.defaultCode = 'UA';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('code') === null) {
      this.code = this.defaultCode;
    } else {
      this.code = localStorage.getItem('code');
    }

    return {
      city: this.city,
      code: this.code,
    };
  }

  setLocationData(city, code) {
    localStorage.setItem('city', city);
    localStorage.setItem('code', code);
  }
}
