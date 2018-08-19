module.exports = function(config) {
  const Cache = require("./cache/Cache.class")(config.cache);
  let cache = new Cache();
  let environment = config.environment;
  return {
    FormMapper: require("./forms/FormMapper.class")(config.formMapper, cache),
    Validator: require("./forms/Validator.class")(config.validator, cache),
    Mailer: require("./mailer/Mailer.class")(config.mailer, cache, environment),
    cache: cache
  };
};
