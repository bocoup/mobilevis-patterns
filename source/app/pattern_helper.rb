require 'yaml'
require 'json'
require 'time'

class Pattern
  def initialize(title, desc, sub, path, time)
    @title = title
    @description = desc
    @submitted_by = sub
    @path = path
    @timestamp = time
  end
  def getBinding()
    return binding()
  end
end

class PatternHelper < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super
  end

  helpers do
    def listFiles()
      output = []
      files = []
      template = ERB.new(File.read("source/partials/_index_pattern.erb"))

      Dir["source/patterns/*.erb"].each do |path|
        meta = YAML.load_file(path)
        meta["path"] = "pattern/" + path.split("/").last.split(".").first.split("_").last
        files.push(meta)

      end

      files = files.sort_by do |a|
        a["timestamp"]
      end

      files.each do |meta|
        pattern = Pattern.new(meta["title"], meta["description"],
            meta["submitted_by"], meta["path"] + ".html", meta["timestamp"])
        output << template.result(pattern.getBinding)
      end

      output.join("")
    end
  end
end

::Middleman::Extensions.register(:pattern_helper, PatternHelper)