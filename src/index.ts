import {JupyterFrontEnd, JupyterFrontEndPlugin} from '@jupyterlab/application';
import {ICommandPalette} from '@jupyterlab/apputils';
import {Weather} from "./weather";


/**
 * Initialization data for the jupyterlab_weather extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: 'jupyterlab_weather',
    autoStart: true,
    requires: [ICommandPalette],
    activate: async (app: JupyterFrontEnd) => {
        const weatherWidget = new Weather();
        weatherWidget.id = 'weather-jupyterlab';
        weatherWidget.title.iconClass = 'jp-icon-weather jp-SideBar-tabIcon';
        weatherWidget.title.caption = 'Weather Search';
        weatherWidget.title.closable = true;
        app.shell.add(weatherWidget, 'left');
    }

};

export default extension;
