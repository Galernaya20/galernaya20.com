# Require

Node version is v8.7.0

npm install --global yarn@v0.24.6

# Gatsby app install and run

!IMPORTANT
Ensure `yarn version` is v0.24.6

```
yarn install
npm run develop
open localhost:8000
```

# Storybook install and run

```
cd .storybook
npm install
cd ..
npm run storybook
open localhost:6006
```

# Contentful-importer
```bash
gem install contentful-importer
cd galernaya_data_for_import
contentful-importer --configuration=settings.yml import
contentful-importer --configuration = settings.yml publish
```
More info https://github.com/contentful-labs/contentful-importer.rb


# Wordpress-exporter
```bash
gem install contentful-importer
cd galernaya_data_for_import

```

Change settings.yml
```yaml
wordpress_xml_path: PATH_TO_XML/file.xml
```
To extract the content run:
```bash
wordpress-exporter --config-file settings.yml --extract-to-json
```
More info https://github.com/contentful-labs/wordpress-exporter.rb
