//GLOBALS  - no window

//__dirname - path to current directory
//console.log(__dirname) ///Users/thiagodebia/Desktop/tutorialnode
//__filename - file name
//console.log(__filename)// /Users/thiagodebia/Desktop/tutorialnode/1-intro.js
// require - function to use modules (CommonJS)
// console.log(require)

/*

Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/Users/thiagodebia/Desktop/tutorialnode',
    exports: {},
    filename: '/Users/thiagodebia/Desktop/tutorialnode/1-intro.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/thiagodebia/Desktop/tutorialnode/node_modules',
      '/Users/thiagodebia/Desktop/node_modules',
      '/Users/thiagodebia/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    '/Users/thiagodebia/Desktop/tutorialnode/1-intro.js': Module {
      id: '.',
      path: '/Users/thiagodebia/Desktop/tutorialnode',
      exports: {},
      filename: '/Users/thiagodebia/Desktop/tutorialnode/1-intro.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
}

*/
//module - info about current module (file)

// console.log(module)

/* 
Module {
  id: '.',
  path: '/Users/thiagodebia/Desktop/tutorialnode',
  exports: {},
  filename: '/Users/thiagodebia/Desktop/tutorialnode/1-intro.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/thiagodebia/Desktop/tutorialnode/node_modules',
    '/Users/thiagodebia/Desktop/node_modules',
    '/Users/thiagodebia/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
*/
//process - info about env where the program is being executed

// console.log(process)

/* 

process {
  version: 'v16.13.0',
  versions: {
    node: '16.13.0',
    v8: '9.4.146.19-node.13',
    uv: '1.42.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.17.2',
    modules: '93',
    nghttp2: '1.45.1',
    napi: '8',
    llhttp: '6.0.4',
    openssl: '1.1.1l+quic',
    cldr: '39.0',
    icu: '69.1',
    tz: '2021a',
    unicode: '13.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  },
  arch: 'arm64',
  platform: 'darwin',
  release: {
    name: 'node',
    lts: 'Gallium',
    sourceUrl: 'https://nodejs.org/download/release/v16.13.0/node-v16.13.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v16.13.0/node-v16.13.0-headers.tar.gz'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding native_module',
    'Internal Binding errors',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding constants',
    'Internal Binding util',
    'Internal Binding types',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/assert',
    'NativeModule internal/validators',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding string_decoder',
    'NativeModule internal/buffer',
    'Internal Binding blob',
    'NativeModule internal/encoding',
    'Internal Binding symbols',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule internal/blob',
    'NativeModule buffer',
    'NativeModule internal/process/per_thread',
    'Internal Binding process_methods',
    'Internal Binding credentials',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'NativeModule internal/async_hooks',
    'NativeModule async_hooks',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule internal/process/task_queues',
    'Internal Binding trace_events',
    'NativeModule internal/constants',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule internal/querystring',
    'NativeModule path',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'NativeModule internal/util/debuglog',
    'NativeModule util',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'NativeModule internal/abort_controller',
    'Internal Binding worker',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/legacy',
    'NativeModule internal/streams/add-abort-signal',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/state',
    'NativeModule string_decoder',
    'NativeModule internal/streams/from',
    'NativeModule internal/streams/readable',
    'NativeModule internal/streams/writable',
    'NativeModule internal/streams/duplex',
    'NativeModule internal/streams/utils',
    'NativeModule internal/streams/pipeline',
    'NativeModule internal/streams/compose',
    'NativeModule stream/promises',
    'NativeModule internal/streams/transform',
    'NativeModule internal/streams/passthrough',
    'NativeModule stream',
    'NativeModule internal/worker/io',
    'Internal Binding timers',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'NativeModule internal/timers',
    'NativeModule timers',
    'NativeModule internal/perf/performance_entry',
    'NativeModule internal/perf/observe',
    'NativeModule internal/perf/nodetiming',
    'NativeModule internal/perf/usertiming',
    'NativeModule internal/perf/event_loop_utilization',
    'NativeModule internal/histogram',
    'NativeModule internal/perf/timerify',
    'NativeModule internal/perf/performance',
    'NativeModule internal/perf/event_loop_delay',
    'NativeModule perf_hooks',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'Internal Binding fs',
    'NativeModule internal/fs/utils',
    'Internal Binding fs_dir',
    'NativeModule internal/fs/dir',
    'Internal Binding fs_event_wrap',
    'Internal Binding uv',
    'NativeModule internal/fs/watchers',
    'NativeModule internal/fs/read_file_context',
    'NativeModule fs',
    'Internal Binding serdes',
    'Internal Binding profiler',
    'Internal Binding heap_utils',
    ... 46 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [Function: startListeningIfSignal],
    removeListener: [Function: stopListeningIfSignal],
    warning: [Function: onWarning],
    SIGWINCH: [Function (anonymous)]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: false,
  config: [Getter/Setter],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  kill: [Function: kill],
  exit: [Function: exit],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  assert: [Function: deprecated],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: [Getter]
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: {
    USER: 'thiagodebia',
    __CFBundleIdentifier: 'com.microsoft.VSCode',
    COMMAND_MODE: 'unix2003',
    LOGNAME: 'thiagodebia',
    PATH: '/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/opt/homebrew/bin:/opt/homebrew/sbin',
    SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.KhgJhoMWQq/Listeners',
    SHELL: '/bin/zsh',
    HOME: '/Users/thiagodebia',
    __CF_USER_TEXT_ENCODING: '0x1F5:0x0:0x0',
    TMPDIR: '/var/folders/s0/d8zxzqdj6zbbpw3x3fp37_380000gn/T/',
    XPC_SERVICE_NAME: '0',
    XPC_FLAGS: '0x0',
    ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
    SHLVL: '1',
    PWD: '/Users/thiagodebia/Desktop/tutorialnode',
    OLDPWD: '/Users/thiagodebia/Desktop/tutorialnode',
    HOMEBREW_PREFIX: '/opt/homebrew',
    HOMEBREW_CELLAR: '/opt/homebrew/Cellar',
    HOMEBREW_REPOSITORY: '/opt/homebrew',
    HOMEBREW_SHELLENV_PREFIX: '/opt/homebrew',
    MANPATH: '/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/opt/homebrew/share/man:',
    INFOPATH: '/opt/homebrew/share/info:/opt/homebrew/share/info:',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.66.1',
    LANG: 'en_US.UTF-8',
    COLORTERM: 'truecolor',
    VSCODE_GIT_IPC_HANDLE: '/var/folders/s0/d8zxzqdj6zbbpw3x3fp37_380000gn/T/vscode-git-dbc8120e45.sock',
    VSCODE_GIT_ASKPASS_NODE: '/Applications/Visual Studio Code.app/Contents/MacOS/Electron',
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
    VSCODE_GIT_ASKPASS_MAIN: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js',
    GIT_ASKPASS: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh',
    TERM: 'xterm-256color',
    _: '/usr/local/bin/node'
  },
  title: 'node',
  argv: [
    '/usr/local/bin/node',
    '/Users/thiagodebia/Desktop/tutorialnode/1-intro.js'
  ],
  execArgv: [],
  pid: 4481,
  ppid: 4350,
  execPath: '/usr/local/bin/node',
  debugPort: 9229,
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  argv0: 'node',
  _preload_modules: [],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  mainModule: Module {
    id: '.',
    path: '/Users/thiagodebia/Desktop/tutorialnode',
    exports: {},
    filename: '/Users/thiagodebia/Desktop/tutorialnode/1-intro.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/thiagodebia/Desktop/tutorialnode/node_modules',
      '/Users/thiagodebia/Desktop/node_modules',
      '/Users/thiagodebia/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  [Symbol(kCapture)]: false
}

*/

//setInterval
/*
setInterval(() => {
    console.log(`hello world`)
},1000)
*/

