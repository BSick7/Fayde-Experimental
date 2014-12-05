module runner {
    var testModules = [
        "tests/GridItemsControlTests"
    ];

    Fayde.LoadConfigJson((config, err) => {
        if (err)
            console.warn("Error loading configuration file.", err);

        require(testModules, (...modules: any[]) => {
            for (var i = 0; i < modules.length; i++) {
                modules[i].load();
            }
            QUnit.load();
            QUnit.start();
        });
    });
}