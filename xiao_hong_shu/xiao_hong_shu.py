import hashlib

import requests

from tool import *


class XiaoHongShu(object):
    search_note_url = 'https://www.xiaohongshu.com/fe_api/burdock/weixin/v2/search/notes'
    authorization = 'wxmp.fff1f8d0-4c66-4d61-9c32-a3e59bde0981'

    def search_by_keyword(self, keyword):
        headers = {
            'Host': 'www.xiaohongshu.com',
            'authorization': self.authorization,
            'charset': 'utf-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7 Build/PKQ1.181021.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3149 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/6239 MicroMessenger/8.0.16.2040(0x28001055) Process/appbrand3 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
            'content-type': 'application/json',
            'Referer': 'https://servicewechat.com/wxb296433268a1c654/59/page-frame.html',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
        }
        for i in range(3):
            # todo need sleep random

            params = {
                'keyword': keyword,
                'sortBy': 'general',
                'page': '1',
                'pageSize': '20',
                'prependNoteIds': '',
                'needGifCover': 'true'
            }
            final_url = append_url_params(self.search_note_url, params)
            headers['x-sign'] = self.get_x_sign(final_url)
            headers['device-fingerprint'] = self.get_device_fingerprint()
            resp = requests.get(final_url, headers=headers)
            if resp.status_code != 200:
                logging.error('call xiao_hong_shu api error. {}'.format(resp.text))
            else:
                # todo
                pass

    @staticmethod
    def get_device_fingerprint():
        success, device_fingerprint = run_system_cmd('node get_device_id.js')
        if success:
            return device_fingerprint
        else:
            exit()

    @staticmethod
    def get_x_sign(url):
        """
        获取 X-Sign 参数
        :return:
        """
        url_path = url[url.index("/fe_api/"):]
        final_str = '{}WSUDD'.format(url_path)
        return 'X' + hashlib.md5(final_str.encode()).hexdigest()


if __name__ == '__main__':
    xiao_hong_shu = XiaoHongShu()
    xiao_hong_shu.search_by_keyword('美女')
