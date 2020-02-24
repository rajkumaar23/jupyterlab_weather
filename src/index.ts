import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_weather extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_weather',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_weather is activated!');
  }
};

export default extension;
