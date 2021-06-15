let loadedScripts = [];

function loadScriptFromUrl(url) {
  if (loadedScripts.includes(url)) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    loadedScripts.push(url);

    function onLoad() {
      resolve();
    }

    function onError() {
      loadedScripts = loadedScripts.filter(_ => _ !== url);
      reject(new Error(`Ошибка загрузки скрипта ${url}`));
    }

    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;

    script.onload = onLoad;
    script.onerror = onError;

    document.head.append(script);
  });
}

function loadScript(arg, callback = () => { }) {
  if (typeof arg === 'string') {
    loadScriptFromUrl(arg)
      .then(callback);
  } else if (Array.isArray(arg)) {
    const arrayOfPromises = arg.map(loadScriptFromUrl);

    Promise.all(arrayOfPromises)
      .then(callback);
  }
}