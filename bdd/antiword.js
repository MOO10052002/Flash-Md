const _0x2389aa = _0x5538;
(function (_0x28f316, _0x458b8d) {
    const _0x103725 = _0x5538, _0x2ca6d8 = _0x28f316();
    while (!![]) {
        try {
            const _0x2bdc1c = parseInt(_0x103725(0x1ba)) / (0x33 * 0x79 + -0x31 * 0x4 + 0x2 * -0xbab) + -parseInt(_0x103725(0x223)) / (-0x1fb6 + -0x24df + 0x4497 * 0x1) + -parseInt(_0x103725(0x233)) / (0x17 * -0x11b + 0x1306 + 0x66a) * (parseInt(_0x103725(0x22a)) / (-0x2377 + 0xac6 + 0x73 * 0x37)) + parseInt(_0x103725(0x235)) / (0x407 * -0x1 + 0x5 * -0x389 + 0x15b9) * (-parseInt(_0x103725(0x1e8)) / (0x1315 + 0x1 * 0x1473 + 0xd * -0x30a)) + -parseInt(_0x103725(0x20f)) / (0x1 * 0x97b + 0x17 * 0x3 + -0x9b9 * 0x1) * (-parseInt(_0x103725(0x1b8)) / (-0x11a * -0x3 + 0x17 * -0x7d + 0x7f5)) + -parseInt(_0x103725(0x22f)) / (-0x11c1 * -0x1 + 0x7 * -0x4ed + 0x1 * 0x10c3) + -parseInt(_0x103725(0x1af)) / (-0x1f26 + -0x2 * 0x8b2 + 0x3094) * (-parseInt(_0x103725(0x1e6)) / (0x124e + 0x10a5 + -0x22e8));
            if (_0x2bdc1c === _0x458b8d)
                break;
            else
                _0x2ca6d8['push'](_0x2ca6d8['shift']());
        } catch (_0x16f978) {
            _0x2ca6d8['push'](_0x2ca6d8['shift']());
        }
    }
}(_0x3842, 0xaae6d + 0x11e * -0x3d4 + 0x115 * 0x376), require(_0x2389aa(0x1b4))[_0x2389aa(0x218)]());
const {Pool} = require('pg');
let s = require(_0x2389aa(0x1b3));
var dbUrl = s[_0x2389aa(0x22c) + 'RL'] ? s[_0x2389aa(0x22c) + 'RL'] : _0x2389aa(0x1d3) + _0x2389aa(0x1c5) + _0x2389aa(0x1e3) + _0x2389aa(0x1c3) + _0x2389aa(0x1a8) + _0x2389aa(0x1db) + _0x2389aa(0x202) + _0x2389aa(0x1d0) + _0x2389aa(0x20c) + _0x2389aa(0x1ef) + _0x2389aa(0x1ed) + _0x2389aa(0x1b1);
const proConfig = {
        'connectionString': dbUrl,
        'ssl': { 'rejectUnauthorized': ![] }
    }, pool = new Pool(proConfig);
async function createAntiwordTable() {
    const _0x16b597 = _0x2389aa, _0x27e7fe = {
            'moLtF': _0x16b597(0x1cb) + _0x16b597(0x1ce) + _0x16b597(0x1c8) + _0x16b597(0x1c9) + _0x16b597(0x1e4),
            'tDRlj': _0x16b597(0x1fa) + _0x16b597(0x229) + _0x16b597(0x1e2) + _0x16b597(0x217) + _0x16b597(0x1d1) + _0x16b597(0x222) + _0x16b597(0x1a5)
        }, _0xbf8eb1 = await pool[_0x16b597(0x1ea)]();
    try {
        await _0xbf8eb1[_0x16b597(0x212)](_0x16b597(0x21a) + _0x16b597(0x1a2) + _0x16b597(0x1f3) + _0x16b597(0x1bd) + _0x16b597(0x1fe) + _0x16b597(0x1df) + _0x16b597(0x1f2) + _0x16b597(0x20d) + _0x16b597(0x1c0) + _0x16b597(0x1dd)), console[_0x16b597(0x20b)](_0x27e7fe[_0x16b597(0x211)]);
    } catch (_0x215810) {
        console[_0x16b597(0x1a3)](_0x27e7fe[_0x16b597(0x231)], _0x215810);
    } finally {
        _0xbf8eb1[_0x16b597(0x1a7)]();
    }
}
createAntiwordTable();
async function ajouterOuMettreAJourJid(_0x2274dd, _0x246ba0) {
    const _0x8d7190 = _0x2389aa, _0xd3ca6f = {
            'zTTie': _0x8d7190(0x234) + _0x8d7190(0x232) + _0x8d7190(0x1a1) + _0x8d7190(0x1f4),
            'rIaJt': function (_0x602d6d, _0x372c93) {
                return _0x602d6d > _0x372c93;
            },
            'tQsIN': _0x8d7190(0x1fb) + _0x8d7190(0x1f8) + _0x8d7190(0x208) + _0x8d7190(0x224) + _0x8d7190(0x205),
            'fgell': _0x8d7190(0x206) + _0x8d7190(0x1f7) + _0x8d7190(0x209) + _0x8d7190(0x1c4) + _0x8d7190(0x21d) + _0x8d7190(0x221),
            'qRAFz': _0x8d7190(0x1cc),
            'ldKzP': _0x8d7190(0x1aa) + _0x8d7190(0x200) + _0x8d7190(0x1ff) + _0x8d7190(0x1e0) + _0x8d7190(0x1d8) + _0x8d7190(0x1d7) + _0x8d7190(0x22b)
        }, _0x25496a = await pool[_0x8d7190(0x1ea)]();
    try {
        const _0x47467e = await _0x25496a[_0x8d7190(0x212)](_0xd3ca6f[_0x8d7190(0x1f9)], [_0x2274dd]), _0x439fd4 = _0xd3ca6f[_0x8d7190(0x1d4)](_0x47467e[_0x8d7190(0x236)][_0x8d7190(0x1e5)], 0x6c + 0x18ca + -0xe * 0x1cd);
        _0x439fd4 ? await _0x25496a[_0x8d7190(0x212)](_0xd3ca6f[_0x8d7190(0x1a9)], [
            _0x246ba0,
            _0x2274dd
        ]) : await _0x25496a[_0x8d7190(0x212)](_0xd3ca6f[_0x8d7190(0x1bc)], [
            _0x2274dd,
            _0x246ba0,
            _0xd3ca6f[_0x8d7190(0x1eb)]
        ]), console[_0x8d7190(0x20b)](_0x8d7190(0x1ec) + _0x2274dd + (_0x8d7190(0x1da) + _0x8d7190(0x1e9) + _0x8d7190(0x1d2) + _0x8d7190(0x1fd) + _0x8d7190(0x210) + _0x8d7190(0x1c1)));
    } catch (_0x3893f2) {
        console[_0x8d7190(0x1a3)](_0xd3ca6f[_0x8d7190(0x201)], _0x3893f2);
    } finally {
        _0x25496a[_0x8d7190(0x1a7)]();
    }
}
;
async function mettreAJourAction(_0x252162, _0x5cf3c0) {
    const _0x2905d4 = _0x2389aa, _0xb469fa = {
            'FpkRd': _0x2905d4(0x234) + _0x2905d4(0x232) + _0x2905d4(0x1a1) + _0x2905d4(0x1f4),
            'mKQWE': function (_0x16b4e5, _0xf65447) {
                return _0x16b4e5 > _0xf65447;
            },
            'hgeEs': _0x2905d4(0x1fb) + _0x2905d4(0x1a4) + _0x2905d4(0x203) + _0x2905d4(0x20e) + _0x2905d4(0x1e7),
            'tLiMl': _0x2905d4(0x206) + _0x2905d4(0x1f7) + _0x2905d4(0x209) + _0x2905d4(0x1c4) + _0x2905d4(0x21d) + _0x2905d4(0x221),
            'jXCcd': _0x2905d4(0x1e1),
            'JoIwY': _0x2905d4(0x1aa) + _0x2905d4(0x207) + _0x2905d4(0x1b5) + _0x2905d4(0x1bf) + _0x2905d4(0x1b2) + _0x2905d4(0x21f) + _0x2905d4(0x216)
        }, _0x5e0874 = await pool[_0x2905d4(0x1ea)]();
    try {
        const _0x1761e4 = await _0x5e0874[_0x2905d4(0x212)](_0xb469fa[_0x2905d4(0x1cd)], [_0x252162]), _0x4f8498 = _0xb469fa[_0x2905d4(0x1f5)](_0x1761e4[_0x2905d4(0x236)][_0x2905d4(0x1e5)], 0x6 * -0x9d + -0x30 * 0x51 + 0x3c6 * 0x5);
        _0x4f8498 ? await _0x5e0874[_0x2905d4(0x212)](_0xb469fa[_0x2905d4(0x1d9)], [
            _0x5cf3c0,
            _0x252162
        ]) : await _0x5e0874[_0x2905d4(0x212)](_0xb469fa[_0x2905d4(0x1d6)], [
            _0x252162,
            _0xb469fa[_0x2905d4(0x1c2)],
            _0x5cf3c0
        ]), console[_0x2905d4(0x20b)](_0x2905d4(0x22d) + _0x2905d4(0x1ca) + _0x2905d4(0x1ad) + _0x2905d4(0x1cf) + _0x2905d4(0x1c7) + _0x252162 + (_0x2905d4(0x1d7) + _0x2905d4(0x1dc) + _0x2905d4(0x20a)));
    } catch (_0x3070c6) {
        console[_0x2905d4(0x1a3)](_0xb469fa[_0x2905d4(0x1b6)], _0x3070c6);
    } finally {
        _0x5e0874[_0x2905d4(0x1a7)]();
    }
}
;
async function verifierEtatJid(_0x3af366) {
    const _0x5f4fa7 = _0x2389aa, _0x5206a4 = {
            'pLhjG': _0x5f4fa7(0x226) + _0x5f4fa7(0x1f6) + _0x5f4fa7(0x1b0) + _0x5f4fa7(0x21b),
            'FpEzV': function (_0x1affd2, _0x1b5604) {
                return _0x1affd2 > _0x1b5604;
            },
            'herWv': function (_0x1ba9aa, _0x361d0c) {
                return _0x1ba9aa === _0x361d0c;
            },
            'FFwEw': _0x5f4fa7(0x1ae),
            'sfSyV': _0x5f4fa7(0x1aa) + _0x5f4fa7(0x22e) + _0x5f4fa7(0x21e) + _0x5f4fa7(0x213) + _0x5f4fa7(0x21c) + _0x5f4fa7(0x1fc) + 'e\x20'
        }, _0xa8dcfd = await pool[_0x5f4fa7(0x1ea)]();
    try {
        const _0x20130a = await _0xa8dcfd[_0x5f4fa7(0x212)](_0x5206a4[_0x5f4fa7(0x1f1)], [_0x3af366]);
        if (_0x5206a4[_0x5f4fa7(0x215)](_0x20130a[_0x5f4fa7(0x236)][_0x5f4fa7(0x1e5)], -0x20ee + 0xe2f * 0x2 + 0x490)) {
            const _0x5de8c0 = _0x20130a[_0x5f4fa7(0x236)][0x1 * 0x22b2 + -0x149 * -0x9 + 0xd * -0x38f][_0x5f4fa7(0x1ac)];
            return _0x5206a4[_0x5f4fa7(0x227)](_0x5de8c0, _0x5206a4[_0x5f4fa7(0x1b7)]);
        } else
            return ![];
    } catch (_0x389daf) {
        return console[_0x5f4fa7(0x1a3)](_0x5206a4[_0x5f4fa7(0x228)], _0x389daf), ![];
    } finally {
        _0xa8dcfd[_0x5f4fa7(0x1a7)]();
    }
}
;
async function recupererActionJid(_0xf7952) {
    const _0x583107 = _0x2389aa, _0x12e8cf = {
            'MqsSi': _0x583107(0x1c6) + _0x583107(0x214) + _0x583107(0x1ee) + _0x583107(0x1d5) + '$1',
            'LIjmF': function (_0xa067c2, _0x317b00) {
                return _0xa067c2 > _0x317b00;
            },
            'WiRwD': _0x583107(0x1cc),
            'dETKQ': _0x583107(0x1aa) + _0x583107(0x1f0) + _0x583107(0x1b9) + _0x583107(0x219) + _0x583107(0x225) + _0x583107(0x1be) + _0x583107(0x230)
        }, _0x1cb6fb = await pool[_0x583107(0x1ea)]();
    try {
        const _0x43388f = await _0x1cb6fb[_0x583107(0x212)](_0x12e8cf[_0x583107(0x220)], [_0xf7952]);
        if (_0x12e8cf[_0x583107(0x1a6)](_0x43388f[_0x583107(0x236)][_0x583107(0x1e5)], -0x1a0d + 0x1ea1 * -0x1 + 0x38ae)) {
            const _0x5d9db7 = _0x43388f[_0x583107(0x236)][-0x4 * -0x608 + -0x5 * 0x17e + -0x2c7 * 0x6][_0x583107(0x1de)];
            return _0x5d9db7;
        } else
            return _0x12e8cf[_0x583107(0x1ab)];
    } catch (_0x1c2708) {
        return console[_0x583107(0x1a3)](_0x12e8cf[_0x583107(0x204)], _0x1c2708), _0x12e8cf[_0x583107(0x1ab)];
    } finally {
        _0x1cb6fb[_0x583107(0x1a7)]();
    }
}
;
function _0x5538(_0x33ba04, _0x4d80a5) {
    const _0x370419 = _0x3842();
    return _0x5538 = function (_0x29fc7a, _0x36aee3) {
        _0x29fc7a = _0x29fc7a - (0x40d * -0x3 + 0x355 * -0x8 + 0x2870);
        let _0x31f771 = _0x370419[_0x29fc7a];
        return _0x31f771;
    }, _0x5538(_0x33ba04, _0x4d80a5);
}
module[_0x2389aa(0x1bb)] = {
    'mettreAJourAction': mettreAJourAction,
    'ajouterOuMettreAJourJid': ajouterOuMettreAJourJid,
    'verifierEtatJid': verifierEtatJid,
    'recupererActionJid': recupererActionJid
};
function _0x3842() {
    const _0x464268 = [
        '\x20pour\x20le\x20J',
        'ehc73b2p7g',
        'ion\x20de\x20la\x20',
        'r\x20avec\x20suc',
        'postgres:/',
        'rIaJt',
        'ERE\x20jid\x20=\x20',
        'tLiMl',
        '\x20dans\x20la\x20t',
        'our\x20du\x20JID',
        'hgeEs',
        '\x20ajouté\x20ou',
        '7cDeYi@dpg',
        'able\x20\x27anti',
        ';\x0a\x20',
        'action',
        'PRIMARY\x20KE',
        'a\x20mise\x20à\x20j',
        'non',
        'nue\x20lors\x20d',
        'ser:6hwmTN',
        'cès.',
        'length',
        '2068vYyxRz',
        'd\x20=\x20$2',
        '12YTOiXq',
        '\x20mis\x20à\x20jou',
        'connect',
        'qRAFz',
        'JID\x20',
        'render.com',
        'ntiword\x20WH',
        '-postgres.',
        's\x20de\x20la\x20ré',
        'pLhjG',
        'Y,\x0a\x20etat\x20t',
        'T\x20EXISTS\x20a',
        'id\x20=\x20$1',
        'mKQWE',
        't\x20FROM\x20ant',
        'O\x20antiword',
        'ilien\x20SET\x20',
        'zTTie',
        'Une\x20erreur',
        'UPDATE\x20ant',
        'ns\x20la\x20tabl',
        'cès\x20dans\x20l',
        '\x20jid\x20text\x20',
        'ut\x20ou\x20de\x20l',
        's\x20de\x20l\x27ajo',
        'ldKzP',
        '-cj7ldu5je',
        'action\x20=\x20$',
        'dETKQ',
        '=\x20$2',
        'INSERT\x20INT',
        's\x20de\x20la\x20mi',
        'etat\x20=\x20$1\x20',
        '\x20(jid,\x20eta',
        'word\x27.',
        'log',
        '0-a.oregon',
        'ext,\x0a\x20acti',
        '1\x20WHERE\x20ji',
        '9926LTXrpL',
        'a\x20table\x20\x27a',
        'moLtF',
        'query',
        '\x20de\x20l\x27état',
        'ion\x20FROM\x20a',
        'FpEzV',
        'a\x20table\x20:',
        'e\x20la\x20créat',
        'config',
        '\x20de\x20l\x27acti',
        '\x0a\x20CREATE\x20T',
        'E\x20jid\x20=\x20$1',
        '\x20du\x20JID\x20da',
        '\x20VALUES\x20($',
        'rification',
        'JID\x20dans\x20l',
        'MqsSi',
        '1,\x20$2,\x20$3)',
        'table\x20\x27ant',
        '393334uFNspL',
        'WHERE\x20jid\x20',
        'on\x20du\x20JID\x20',
        'SELECT\x20eta',
        'herWv',
        'sfSyV',
        '\x20est\x20surve',
        '103772CWsPjK',
        'able\x20,',
        'DATABASE_U',
        'Action\x20mis',
        's\x20de\x20la\x20vé',
        '10099350pWZiWt',
        'ble\x20:',
        'tDRlj',
        'ROM\x20antiwo',
        '72DsGabT',
        'SELECT\x20*\x20F',
        '36605jiSvdZ',
        'rows',
        'rd\x20WHERE\x20j',
        'ABLE\x20IF\x20NO',
        'error',
        'iword\x20SET\x20',
        'iword\x27:',
        'LIjmF',
        'release',
        'HyX49CXwrG',
        'tQsIN',
        'Erreur\x20lor',
        'WiRwD',
        'etat',
        'vec\x20succès',
        'oui',
        '85980lnaXHG',
        'iword\x20WHER',
        '/db_7xp9',
        'n\x20pour\x20le\x20',
        '../set',
        'dotenv',
        'se\x20à\x20jour\x20',
        'JoIwY',
        'FFwEw',
        '808PjkdqE',
        'cupération',
        '861604llGMLb',
        'exports',
        'fgell',
        'ntiword\x20(\x0a',
        'dans\x20la\x20ta',
        'de\x20l\x27actio',
        'on\x20text\x0a\x20)',
        'ntiword\x27.',
        'jXCcd',
        '7rGPNsjlBE',
        't,\x20action)',
        '/db_7xp9_u',
        'SELECT\x20act',
        'ID\x20',
        'a\x20été\x20créé',
        'e\x20avec\x20suc',
        'e\x20à\x20jour\x20a',
        'La\x20table\x20\x27',
        'supp',
        'FpkRd',
        'antiword\x27\x20'
    ];
    _0x3842 = function () {
        return _0x464268;
    };
    return _0x3842();
}
