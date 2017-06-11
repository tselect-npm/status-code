import { StatusCode } from '../src';

describe('StatusCode', function () {
  describe('.is1xx()', function () {
    it('should return true', function () {
      expect(StatusCode.is1xx(StatusCode.CONTINUE)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.is1xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.is1xx(<any>1000)).to.equal(false);
    });
  });

  describe('.is2xx()', function () {
    it('should return true', function () {
      expect(StatusCode.is2xx(StatusCode.OK)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.is2xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.is2xx(<any>2000)).to.equal(false);
    });
  });

  describe('.is3xx()', function () {
    it('should return true', function () {
      expect(StatusCode.is3xx(StatusCode.MOVED_PERMANENTLY)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.is3xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.is3xx(<any>3000)).to.equal(false);
    });
  });

  describe('.is4xx()', function () {
    it('should return true', function () {
      expect(StatusCode.is4xx(StatusCode.CONFLICT)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.is4xx(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.is4xx(<any>4000)).to.equal(false);
    });
  });

  describe('.is5xx()', function () {
    it('should return true', function () {
      expect(StatusCode.is5xx(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.is5xx(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.is5xx(<any>5000)).to.equal(false);
    });
  });

  describe('.isStatusCode()', function () {
    it('should return true', function () {
      expect(StatusCode.isStatusCode(200)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.isStatusCode(2000)).to.equal(false);
    });
  });

  describe('.isErrorCode()', function () {
    it('should return true', function () {
      expect(StatusCode.isErrorCode(StatusCode.CONFLICT)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.isErrorCode(StatusCode.OK)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.isErrorCode(<any>4000)).to.equal(false);
    });
  });

  describe('.isServerErrorCode()', function () {
    it('should return true', function () {
      expect(StatusCode.isServerErrorCode(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.isServerErrorCode(StatusCode.CONFLICT)).to.equal(false);
    });
    it('should return false (not a status code)', function () {
      expect(StatusCode.isServerErrorCode(<any>5000)).to.equal(false);
    });
  });

  describe('.isConsumerErrorCode()', function () {
    it('should return true', function () {
      expect(StatusCode.isConsumerErrorCode(StatusCode.CONFLICT)).to.equal(true);
    });
    it('should return false', function () {
      expect(StatusCode.isConsumerErrorCode(StatusCode.INTERNAL_SERVER_ERROR)).to.equal(false);
    });
  });

  describe('.toString()', function () {
    it('should return the string version of the code', function () {
      expect(StatusCode.toString(StatusCode.CONFLICT)).to.equal('CONFLICT');
    });
  });
});