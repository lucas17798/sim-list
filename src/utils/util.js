import { remote } from 'electron';

// 过渡关闭窗口
export const transitCloseWindow = () => {
    // remote.getCurrentWindow().close()
    document.querySelector('#app')?.classList.remove('app-show');
    document.querySelector('#app')?.classList.add('app-hide');
    remote.getCurrentWindow().close();
}