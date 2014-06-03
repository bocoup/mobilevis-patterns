require 'fileutils'
require 'erb'

class BuildHelper < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super

    app.after_build do |builder|

      @layout = ERB.new(File.open("source/layouts/layout.erb").read)

      FileUtils::mkdir_p 'build/pattern'

      Dir["source/patterns/*.erb"].each do |path|

        meta = YAML.load_file(path)
        meta["path"] = "pattern/" + path.split("/").last.split(".").first.split("_").last

        content = ERB.new(File.open(path).read).result.split("---").last

        File.open("build/" + meta["path"] + ".html", "w") do |f|

          def a
            @layout.result(binding)
          end

          f.write(a{content})
        end

      end

    end

  end
end

::Middleman::Extensions.register(:build_helper, BuildHelper)