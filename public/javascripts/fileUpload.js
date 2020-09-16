FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);
FilePond.setOptions({
  stylePanelAspectRation: 150 / 100,
  imageResizeTargerHeight: 150,
  imageResizeTargerWidth: 100,
});

FilePond.parse(document.body);
