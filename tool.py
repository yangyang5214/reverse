# -*- coding: UTF-8 -*-

import logging
import subprocess

try:
    import urlparse
    from urllib import urlencode
except:  # For Python 3
    import urllib.parse as urlparse
    from urllib.parse import urlencode


def append_url_params(url: str, params: dict):
    """
    append dict param for url
    :param url: https://www.baidu.com
    :param params:  {'a': '1'}
    :return: https://www.baidu.com?a=1
    """
    url_parts = list(urlparse.urlparse(url))
    query = dict(urlparse.parse_qsl(url_parts[4]))
    query.update(params)
    url_parts[4] = urlencode(query)
    return urlparse.urlunparse(url_parts)


def run_system_cmd(cmd):
    """
    运行系统命令，并返回输出
    :param cmd:
    :return:
    """
    out, error = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True).communicate()
    if error:
        logging.error("run_system_cmd: {}, error: {}".format(cmd, error))
        return False, None
    return True, out.decode('utf-8').strip()


if __name__ == '__main__':
    print(run_system_cmd('node /Users/beer/beer/reverse/xiao_hong_shu/get_device_id.js'))
    exit()
    print(append_url_params('https://www.baidu.com', {'a': '1'}))
