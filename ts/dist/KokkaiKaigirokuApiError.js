"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KokkaiKaigirokuApiError = void 0;
class KokkaiKaigirokuApiError extends Error {
    isKokkaiKaigirokuApiError = true;
    sdk = 'KokkaiKaigirokuApi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.KokkaiKaigirokuApiError = KokkaiKaigirokuApiError;
//# sourceMappingURL=KokkaiKaigirokuApiError.js.map