/**
 * Created by shiwx on 16/11/25.
 */


require.config({
    urlArgs: "date=" + CONFIG.date.getDate(),
    paths: PATH
});


require(['model1', 'model2'], function (model1, model2) {

    console.log(model1.color + " - " + model2.color);

});