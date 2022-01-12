import Taro from "@tarojs/taro";

if (Taro.canIUse('getUpdateManager')) {
  const updateManager = Taro.getUpdateManager();

  updateManager.onCheckForUpdate((res) => {
    if (res.hasUpdate) {
      updateManager.onUpdateReady(() => {
        updateManager.applyUpdate();
      });

      updateManager.onUpdateFailed(() => {
        Taro.showToast({
          title: '新版本更新失败，请手动重启小程序',
          icon: 'none',
        });
      });
    }
  });
}
