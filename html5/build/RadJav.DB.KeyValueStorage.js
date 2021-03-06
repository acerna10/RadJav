/*
    MIT-LICENSE
    Copyright (c) 2017-2018 Higher Edge Software, LLC

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software
    and associated documentation files (the "Software"), to deal in the Software without restriction,
    including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial
    portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
    LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var RadJav;
(function (RadJav) {
    var DB;
    (function (DB) {
        /// Web server
        var KeyValueStorage = /** @class */ (function () {
            function KeyValueStorage() {
                this._storage = null;
                if (this._init != null)
                    this._init();
            }
            /** The database to open.
            * @return Returns true if the database was able to be opened.
            * Also returns true if the database was newly created.
            */
            KeyValueStorage.prototype.open = function (path) {
                return;
            };
            /// Write a value to a key.
            KeyValueStorage.prototype.write = function (key, value) {
                return new Promise(function () { return null; });
            };
            /// The key to read.
            KeyValueStorage.prototype.read = function (key) {
                return new Promise(function () { return null; });
            };
            /// The database to open.
            KeyValueStorage.prototype.close = function () {
            };
            return KeyValueStorage;
        }());
        DB.KeyValueStorage = KeyValueStorage;
    })(DB = RadJav.DB || (RadJav.DB = {}));
})(RadJav || (RadJav = {}));
