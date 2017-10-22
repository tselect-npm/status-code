import {
  StatusCode,
  is1xx,
  is2xx,
  is3xx,
  is4xx,
  is5xx,
  isConsumerErrorStatusCode,
  isServerErrorStatusCode,
  isNonErrorStatusCode,
  isErrorStatusCode,
  isStatusCode,
  toString
} from '../';

describe('StatusCode', function () {
  describe('.is1xx()', function () {
    it('should return true', function () {
      expect(is1xx(StatusCode.CONTINUE)).to.equal(true);
    });
    it('should return false', function () {
      expect(is1xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(is1xx(<any>1000)).to.equal(false);
    });
  });

  describe('.is2xx()', function () {
    it('should return true', function () {
      expect(is2xx(StatusCode.OK)).to.equal(true);
    });
    it('should return false', function () {
      expect(is2xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(is2xx(<any>2000)).to.equal(false);
    });
  });

  describe('.is3xx()', function () {
    it('should return true', function () {
      expect(is3xx(StatusCode.MOVED_PERMANENTLY)).to.equal(true);
    });
    it('should return false', function () {
      expect(is3xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(is3xx(<any>3000)).to.equal(false);
    });
  });

  describe('.is4xx()', function () {
    it('should return true', function () {
      expect(is4xx(StatusCode.CONFLICT)).to.equal(true);
    });
    it('should return false', function () {
      expect(is4xx(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(is4xx(<any>4000)).to.equal(false);
    });
  });

  describe('.is5xx()', function () {
    it('should return true', function () {
      expect(is5xx(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(true);
    });
    it('should return false', function () {
      expect(is5xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(is5xx(<any>5000)).to.equal(false);
    });
  });

  describe('.isStatusCode()', function () {
    it('should return true', function () {
      expect(isStatusCode(200)).to.equal(true);
    });
    it('should return false', function () {
      expect(isStatusCode(2000)).to.equal(false);
    });
  });

  describe('.isErrorStatusCode()', function () {
    it('should return true', function () {
      expect(isErrorStatusCode(StatusCode.CONFLICT)).to.equal(true);
    });
    it('should return false', function () {
      expect(isErrorStatusCode(StatusCode.OK)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(isErrorStatusCode(<any>4000)).to.equal(false);
    });
  });

  describe('.isNonErrorStatusCode()', function () {
    it('should return true', function () {
      expect(isNonErrorStatusCode(StatusCode.OK)).to.equal(true);
    });
    it('should return false', function () {
      expect(isNonErrorStatusCode(StatusCode.BAD_REQUEST)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(isNonErrorStatusCode(<any>4000)).to.equal(false);
    });
  });

  describe('.isServerErrorStatusCode()', function () {
    it('should return true', function () {
      expect(isServerErrorStatusCode(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(true);
    });
    it('should return false', function () {
      expect(isServerErrorStatusCode(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(isServerErrorStatusCode(<any>5000)).to.equal(false);
    });
  });

  describe('.isConsumerErrorStatusCode()', function () {
    it('should return true', function () {
      expect(isConsumerErrorStatusCode(StatusCode.CONFLICT)).to.equal(true);
    });
    it('should return false', function () {
      expect(isConsumerErrorStatusCode(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(false);
    });
  });

  describe('.toString()', function () {
    it('should return the string version of the code', function () {
      expect(toString(StatusCode.CONFLICT)).to.equal('CONFLICT');
    });
  });
});