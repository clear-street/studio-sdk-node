# Changelog

## 0.1.0-alpha.25 (2026-07-18)

Full Changelog: [v0.1.0-alpha.24...v0.1.0-alpha.25](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.24...v0.1.0-alpha.25)

### Features

* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([cb15c9c](https://github.com/clear-street/studio-sdk-node/commit/cb15c9c3cfe9783bf4675cbbc92e237fd19ae910))

## 0.1.0-alpha.24 (2026-05-13)

Full Changelog: [v0.1.0-alpha.23...v0.1.0-alpha.24](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.23...v0.1.0-alpha.24)

### Features

* **api:** manual updates ([3db676a](https://github.com/clear-street/studio-sdk-node/commit/3db676a6c538b363d7ee14de0db1c9a7786b063f))
* **api:** version update ([46eefc0](https://github.com/clear-street/studio-sdk-node/commit/46eefc09c1f8109a50f27d676feb5665a3cd2ba9))
* support setting headers via env ([74b20cb](https://github.com/clear-street/studio-sdk-node/commit/74b20cb331cd6f3cc33f510d6b08a27d81343781))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([fb81a53](https://github.com/clear-street/studio-sdk-node/commit/fb81a53dd865209bd0a1bbb2e07328af984365a4))


### Chores

* **ci:** skip lint on metadata-only changes ([77978fa](https://github.com/clear-street/studio-sdk-node/commit/77978fad0d85285b3b06c0e205f32e8e04b331d8))
* **ci:** skip uploading artifacts on stainless-internal branches ([8432284](https://github.com/clear-street/studio-sdk-node/commit/84322844f805f92fdc4cf24724f4855cc9058abb))
* **internal:** codegen related update ([042a054](https://github.com/clear-street/studio-sdk-node/commit/042a054be8918e74fc1607bb64d141916ed05acd))
* **internal:** codegen related update ([12f1cce](https://github.com/clear-street/studio-sdk-node/commit/12f1cce66d8743e0400a5e20d3db22950bb8e64f))
* **internal:** more robust bootstrap script ([6cf4343](https://github.com/clear-street/studio-sdk-node/commit/6cf43433f18d1168b554c5da68d7057f80596c43))
* **internal:** tweak CI branches ([750d163](https://github.com/clear-street/studio-sdk-node/commit/750d163a7d07f09ee0085d42718791929b605847))
* **internal:** update gitignore ([ba5a3cf](https://github.com/clear-street/studio-sdk-node/commit/ba5a3cfa56e3d5f0a03272f69c4dcf29206cda3a))
* **internal:** update multipart form array serialization ([2678e95](https://github.com/clear-street/studio-sdk-node/commit/2678e9551a56ada486668a5f41c7cff435e8ef2c))
* **test:** do not count install time for mock server timeout ([806a5a9](https://github.com/clear-street/studio-sdk-node/commit/806a5a987f1806a2b359f31c301649a4b98cb879))
* **tests:** bump steady to v0.19.4 ([f2208e8](https://github.com/clear-street/studio-sdk-node/commit/f2208e87bea6d5a2e285e916d34407cb3aefca02))
* **tests:** bump steady to v0.19.5 ([c1f5cb1](https://github.com/clear-street/studio-sdk-node/commit/c1f5cb183c9f672147d1f157c241ffc698e1d9f2))
* **tests:** bump steady to v0.19.6 ([2d09683](https://github.com/clear-street/studio-sdk-node/commit/2d096832d4eee8ba8f6c1b3e2ef5b0fef4967408))
* **tests:** bump steady to v0.19.7 ([b99d435](https://github.com/clear-street/studio-sdk-node/commit/b99d43516eef9f3e986d3009520baeb3fc5481a7))
* **tests:** bump steady to v0.20.1 ([3235a54](https://github.com/clear-street/studio-sdk-node/commit/3235a54a5b8c67d4f8cea24e741089c90bf4155a))
* **tests:** bump steady to v0.20.2 ([92745eb](https://github.com/clear-street/studio-sdk-node/commit/92745eb66d89abab26413abf5be1a025639318e1))
* **tests:** bump steady to v0.22.1 ([c126e4d](https://github.com/clear-street/studio-sdk-node/commit/c126e4d56bb2ef1f911a2791905233f2f9592af4))


### Refactors

* **tests:** switch from prism to steady ([8ea8c43](https://github.com/clear-street/studio-sdk-node/commit/8ea8c43e92c75c6876a37e5dbd59b7a422b7c54f))

## 0.1.0-alpha.23 (2026-03-03)

Full Changelog: [v0.1.0-alpha.22...v0.1.0-alpha.23](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.22...v0.1.0-alpha.23)

### Features

* **api:** option fields ([d7cdb24](https://github.com/clear-street/studio-sdk-node/commit/d7cdb2423e3445a1861a286362f259a6e001c09a))


### Bug Fixes

* **docs/contributing:** correct pnpm link command ([c5e91ef](https://github.com/clear-street/studio-sdk-node/commit/c5e91ef14f19f72c74c8afda88f145027b0468fc))
* **mcp:** correct code tool API endpoint ([d4bd6f5](https://github.com/clear-street/studio-sdk-node/commit/d4bd6f55542cf529d936a96e43bd61744699ced7))
* **mcp:** return correct lines on typescript errors ([0c0ef68](https://github.com/clear-street/studio-sdk-node/commit/0c0ef68e2dd4ff18d59763046fe274db2074e6da))


### Chores

* break long lines in snippets into multiline ([27f92ea](https://github.com/clear-street/studio-sdk-node/commit/27f92ead8432e5a1e4b05d8102aec9490d866239))
* **ci:** upgrade `actions/github-script` ([6a01a91](https://github.com/clear-street/studio-sdk-node/commit/6a01a91ad0319b41bbe22531c7a7c8ba94df5103))
* **client:** do not parse responses with empty content-length ([a7bac66](https://github.com/clear-street/studio-sdk-node/commit/a7bac661a958cbad5914b664957178780e8debea))
* **internal:** codegen related update ([67cff3d](https://github.com/clear-street/studio-sdk-node/commit/67cff3deee16bf96bf265884c710a7c94185dca2))
* **internal:** codegen related update ([1863ee0](https://github.com/clear-street/studio-sdk-node/commit/1863ee0ced1a16b923aa7f2714709ab09b813db4))
* **internal:** codegen related update ([62b3132](https://github.com/clear-street/studio-sdk-node/commit/62b3132c74cf68b47f21e7db27b279da29c14e18))
* **internal:** move stringifyQuery implementation to internal function ([ec6f6d4](https://github.com/clear-street/studio-sdk-node/commit/ec6f6d4f893cc83f08a80b09ab6a2e0d1dacf188))
* **internal:** update `actions/checkout` version ([ad458b4](https://github.com/clear-street/studio-sdk-node/commit/ad458b4ae779e6bbc52c3f3927b1418fd44438dc))
* **internal:** upgrade babel, qs, js-yaml ([4ee1a8d](https://github.com/clear-street/studio-sdk-node/commit/4ee1a8d47f2d4a8a4359bfece4721756c9484e85))
* update mock server docs ([4efed5d](https://github.com/clear-street/studio-sdk-node/commit/4efed5d8d7f2e29273c09e2401b94beb56a2c2d9))

## 0.1.0-alpha.22 (2025-10-10)

Full Changelog: [v0.1.0-alpha.21...v0.1.0-alpha.22](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.21...v0.1.0-alpha.22)

### Features

* **api:** add list instruments endpoint ([714169e](https://github.com/clear-street/studio-sdk-node/commit/714169e48b531ff468a12c46e63ce47d00e76eb3))
* **client:** add support for endpoint-specific base URLs ([38c4492](https://github.com/clear-street/studio-sdk-node/commit/38c4492f0a4504a4e489089d96d9a9ae638eaaeb))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#119](https://github.com/clear-street/studio-sdk-node/issues/119)) ([8027080](https://github.com/clear-street/studio-sdk-node/commit/8027080d0a3e8a515e6232c435725efa1aaa974e))
* avoid type error in certain environments ([#115](https://github.com/clear-street/studio-sdk-node/issues/115)) ([440ba72](https://github.com/clear-street/studio-sdk-node/commit/440ba72ddb616bcc4098a8fad5d728dcce679554))
* **ci:** release-doctor — report correct token name ([4217502](https://github.com/clear-street/studio-sdk-node/commit/4217502aeec911686712763a54c953c20922b3c2))
* **client:** don't send `Content-Type` for bodyless methods ([b261832](https://github.com/clear-street/studio-sdk-node/commit/b2618322311d593fb3a478c2d6aa30a9dfacae17))
* **client:** send `X-Stainless-Timeout` in seconds ([#117](https://github.com/clear-street/studio-sdk-node/issues/117)) ([df478a8](https://github.com/clear-street/studio-sdk-node/commit/df478a895eae015073a77410f7ed0f8d5e593262))
* coerce nullable values to undefined ([3c536bb](https://github.com/clear-street/studio-sdk-node/commit/3c536bb8e1da794a23741d93d6e8d15d41c30758))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#116](https://github.com/clear-street/studio-sdk-node/issues/116)) ([dec542c](https://github.com/clear-street/studio-sdk-node/commit/dec542ce447f50f35576e0d6d0e83c1b2442995d))
* **mcp:** remove unused tools.ts ([#120](https://github.com/clear-street/studio-sdk-node/issues/120)) ([a7766fb](https://github.com/clear-street/studio-sdk-node/commit/a7766fb25e94f47740402dd61f853b18f691f8ed))
* publish script — handle NPM errors correctly ([ddfeec3](https://github.com/clear-street/studio-sdk-node/commit/ddfeec33999471a5213d80eae2cb9051a3598cdd))


### Performance Improvements

* faster formatting ([2d8cf95](https://github.com/clear-street/studio-sdk-node/commit/2d8cf9528bda88f51faabf27b12a615a4eff7903))


### Chores

* ci build action ([1fcddba](https://github.com/clear-street/studio-sdk-node/commit/1fcddba9ffaa381e01a36853a3ab1a09fe285ece))
* **ci:** add timeout thresholds for CI jobs ([a3c9f17](https://github.com/clear-street/studio-sdk-node/commit/a3c9f176462a7d162482eb16bbbae3d056a9f0db))
* **ci:** bump node version for release workflows ([e0239fd](https://github.com/clear-street/studio-sdk-node/commit/e0239fd611ba254e2c8fd0d934478be026ef4e63))
* **ci:** enable for pull requests ([8da1fa5](https://github.com/clear-street/studio-sdk-node/commit/8da1fa526ee20f47ecfb6d3b91ab1c0772558da7))
* **ci:** only run for pushes and fork pull requests ([806caa2](https://github.com/clear-street/studio-sdk-node/commit/806caa25d413d49005787815ffd1b72728acf8ed))
* **ci:** only use depot for staging repos ([8a395b6](https://github.com/clear-street/studio-sdk-node/commit/8a395b65059718cdd9070ba2bb17a46e66fe680f))
* **client:** minor internal fixes ([80ef89e](https://github.com/clear-street/studio-sdk-node/commit/80ef89e346b59144bf301db0c5f8d11f87a302f5))
* **deps:** update dependency node-fetch to v2.6.13 ([5eca985](https://github.com/clear-street/studio-sdk-node/commit/5eca98586af671dbbd58c3109f5f03201f55c0a6))
* do not install brew dependencies in ./scripts/bootstrap by default ([461090d](https://github.com/clear-street/studio-sdk-node/commit/461090db7a80698a0cd6352e58045b46cbf0dc4d))
* **docs:** grammar improvements ([4f4b88d](https://github.com/clear-street/studio-sdk-node/commit/4f4b88d7a1e4832cd2102cd8a80cb1ac62a6369c))
* **docs:** use top-level-await in example snippets ([34b520b](https://github.com/clear-street/studio-sdk-node/commit/34b520b3a0b45554bea24b0cd5c6f7a3083dfccf))
* **exports:** cleaner resource index imports ([#111](https://github.com/clear-street/studio-sdk-node/issues/111)) ([b501220](https://github.com/clear-street/studio-sdk-node/commit/b501220f9ac557c525e9e355400a1d537f3c1304))
* **exports:** stop using path fallbacks ([#113](https://github.com/clear-street/studio-sdk-node/issues/113)) ([5833300](https://github.com/clear-street/studio-sdk-node/commit/583330097ba51fc533ccf3bcf10a6e0e56bfd0c3))
* improve publish-npm script --latest tag logic ([77ae63a](https://github.com/clear-street/studio-sdk-node/commit/77ae63a5efd51870428a078e8e17aceeb4c1d912))
* **internal:** add aliases for Record and Array ([#118](https://github.com/clear-street/studio-sdk-node/issues/118)) ([90a250a](https://github.com/clear-street/studio-sdk-node/commit/90a250ae8177482165e45dd34334d8ea45a3a037))
* **internal:** codegen related update ([e1c9b51](https://github.com/clear-street/studio-sdk-node/commit/e1c9b518ddc2ea337778cfd12be664e81814cbfe))
* **internal:** codegen related update ([121231c](https://github.com/clear-street/studio-sdk-node/commit/121231c120050da4d0b03c500026f298e6dbc88c))
* **internal:** fix incremental formatting in some cases ([7c629ac](https://github.com/clear-street/studio-sdk-node/commit/7c629ac9bed3f18c6923f87e3c59d31220fe11d6))
* **internal:** formatting change ([545b22a](https://github.com/clear-street/studio-sdk-node/commit/545b22ae3498e05592512b4b96bb5d527f1479a7))
* **internal:** ignore .eslintcache ([80b0f4c](https://github.com/clear-street/studio-sdk-node/commit/80b0f4c0929dcbfbd2db66c161681d8575c2f2be))
* **internal:** make base APIResource abstract ([53c05c3](https://github.com/clear-street/studio-sdk-node/commit/53c05c3b8691d1d97641febe0bee2137f42e9833))
* **internal:** move publish config ([7b4aa51](https://github.com/clear-street/studio-sdk-node/commit/7b4aa51b79e4134db85dafed2a85c26a4230738e))
* **internal:** reduce CI branch coverage ([6be6d25](https://github.com/clear-street/studio-sdk-node/commit/6be6d25646710e51ec2527c88175fb5d3b7a8dc8))
* **internal:** remove .eslintcache ([331f724](https://github.com/clear-street/studio-sdk-node/commit/331f724c2fc1529c5e40503c6d0b891e6a45fbb2))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([7c28822](https://github.com/clear-street/studio-sdk-node/commit/7c288220d3e6b28f0fba8bf7a6f6c5d1886dafcc))
* **internal:** remove redundant imports config ([ebf7beb](https://github.com/clear-street/studio-sdk-node/commit/ebf7beb85756d33a297e45e0001bf1536cd02f85))
* **internal:** update comment in script ([70a9e08](https://github.com/clear-street/studio-sdk-node/commit/70a9e0855768aa7ff522c83b36e5ee445a81ea8a))
* **internal:** upload builds and expand CI branch coverage ([d068a7f](https://github.com/clear-street/studio-sdk-node/commit/d068a7fbacdf693f58fdd446bf47a814244ec598))
* **internal:** use npm pack for build uploads ([9a49351](https://github.com/clear-street/studio-sdk-node/commit/9a4935156ccbac33ce1cdbffa4ea6382a69ab79c))
* make some internal functions async ([1c5f371](https://github.com/clear-street/studio-sdk-node/commit/1c5f371aef78eb1b57b8e2c8bcdd0eb9869e08d2))
* mention unit type in timeout docs ([8fff549](https://github.com/clear-street/studio-sdk-node/commit/8fff549abe57caaf5e71c215cdb716e6bea6cc20))
* update @stainless-api/prism-cli to v5.15.0 ([1bfbb70](https://github.com/clear-street/studio-sdk-node/commit/1bfbb70e50403ad231f0c7aca8221b725ec040b5))
* update CI script ([b974c79](https://github.com/clear-street/studio-sdk-node/commit/b974c79d56e1d10c12127110b3a236ecc53a8f28))


### Documentation

* add examples to tsdocs ([7ecdece](https://github.com/clear-street/studio-sdk-node/commit/7ecdece7fab0f3c7e86fa95c1f3d0eb6e2d712d4))
* **readme:** fix typo ([72dc4bd](https://github.com/clear-street/studio-sdk-node/commit/72dc4bd05976ecd17589bd7b55c6c4bc19e7b80b))


### Refactors

* **types:** replace Record with mapped types ([b0fa935](https://github.com/clear-street/studio-sdk-node/commit/b0fa935f8f1179cdc6b5a7d2738cd79a2b0fd2f4))

## 0.1.0-alpha.21 (2025-03-14)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#105](https://github.com/clear-street/studio-sdk-node/issues/105)) ([26ee748](https://github.com/clear-street/studio-sdk-node/commit/26ee74858b4d2cec4c82b38c7f859380d20cd644))
* **api:** add net pnl to pnl-sums ([#107](https://github.com/clear-street/studio-sdk-node/issues/107)) ([c389a53](https://github.com/clear-street/studio-sdk-node/commit/c389a534e92f8e2b326a27e5dc357af4a4175c07))
* **client:** accept RFC6838 JSON content types ([#106](https://github.com/clear-street/studio-sdk-node/issues/106)) ([ae32d47](https://github.com/clear-street/studio-sdk-node/commit/ae32d47e377b885dcbeffef3d31bce5d764a8cda))


### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#109](https://github.com/clear-street/studio-sdk-node/issues/109)) ([ee8f728](https://github.com/clear-street/studio-sdk-node/commit/ee8f728eccc58bc59055fa7fe13fa32c8110c535))


### Chores

* **internal:** remove extra empty newlines ([#108](https://github.com/clear-street/studio-sdk-node/issues/108)) ([eea3816](https://github.com/clear-street/studio-sdk-node/commit/eea38168b423bd10b1d9b4e71a3a3670c964d5c9))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#103](https://github.com/clear-street/studio-sdk-node/issues/103)) ([6ad1d78](https://github.com/clear-street/studio-sdk-node/commit/6ad1d780261d25d12ec912244a94057c8644d5a5))

## 0.1.0-alpha.20 (2025-02-26)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Features

* **api:** fix tests ([#99](https://github.com/clear-street/studio-sdk-node/issues/99)) ([d358218](https://github.com/clear-street/studio-sdk-node/commit/d3582186300f769171c398303912e9f03577d7d3))
* **api:** manual updates ([#101](https://github.com/clear-street/studio-sdk-node/issues/101)) ([055ea7d](https://github.com/clear-street/studio-sdk-node/commit/055ea7d9fb14f1f37dfddd040ed9763c143337f7))
* **api:** manual updates ([#96](https://github.com/clear-street/studio-sdk-node/issues/96)) ([679e10b](https://github.com/clear-street/studio-sdk-node/commit/679e10bbdace496e21f011569c368b16bf6aee40))
* **api:** manual updates ([#98](https://github.com/clear-street/studio-sdk-node/issues/98)) ([b80af3b](https://github.com/clear-street/studio-sdk-node/commit/b80af3bbe5266473459e8b7c3af2f9827a8c1c4e))


### Chores

* **internal:** fix devcontainers setup ([#100](https://github.com/clear-street/studio-sdk-node/issues/100)) ([9be8032](https://github.com/clear-street/studio-sdk-node/commit/9be8032898d73e090da83660293b09f4f815b020))

## 0.1.0-alpha.19 (2025-02-19)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Features

* **api:** remove symbol filtering from pnl-sums ([#93](https://github.com/clear-street/studio-sdk-node/issues/93)) ([bd2f33c](https://github.com/clear-street/studio-sdk-node/commit/bd2f33ca43d3fe407fa61f7792d6929821c968c1))

## 0.1.0-alpha.18 (2025-02-14)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Features

* **client:** send `X-Stainless-Timeout` header ([#90](https://github.com/clear-street/studio-sdk-node/issues/90)) ([31a25ac](https://github.com/clear-street/studio-sdk-node/commit/31a25ac1f96aacfa78592e87bcdd7705d02806ea))


### Bug Fixes

* **api:** better support union schemas with common properties ([#86](https://github.com/clear-street/studio-sdk-node/issues/86)) ([2edb7eb](https://github.com/clear-street/studio-sdk-node/commit/2edb7eb496b2c755640620ac2d22d45ec75b63fe))
* **client:** fix export map for index exports ([#91](https://github.com/clear-street/studio-sdk-node/issues/91)) ([016a526](https://github.com/clear-street/studio-sdk-node/commit/016a526fd5d9528e8eea14289b270df3a32bd53e))
* deduplicate unknown entries in union ([#89](https://github.com/clear-street/studio-sdk-node/issues/89)) ([e790d44](https://github.com/clear-street/studio-sdk-node/commit/e790d4440d147c4ccfeaa288dcf2d61dc6fe5b37))


### Chores

* **internal:** add test ([#88](https://github.com/clear-street/studio-sdk-node/issues/88)) ([7c4a077](https://github.com/clear-street/studio-sdk-node/commit/7c4a0774f384260586ea67d14467bda9d0d64785))
* **internal:** change formatting ([#85](https://github.com/clear-street/studio-sdk-node/issues/85)) ([9680cdf](https://github.com/clear-street/studio-sdk-node/commit/9680cdff61fdefd63045ce6d7faf03b7a88ca8fd))
* **internal:** codegen related update ([#83](https://github.com/clear-street/studio-sdk-node/issues/83)) ([6b79c53](https://github.com/clear-street/studio-sdk-node/commit/6b79c53b35d00122b3f17057975f08a3864b1e76))
* **internal:** codegen related update ([#84](https://github.com/clear-street/studio-sdk-node/issues/84)) ([bfd74b4](https://github.com/clear-street/studio-sdk-node/commit/bfd74b4dd90c608ffe931fcd433975907035bcbe))
* **internal:** codegen related update ([#87](https://github.com/clear-street/studio-sdk-node/issues/87)) ([edeef4d](https://github.com/clear-street/studio-sdk-node/commit/edeef4db2d98a5a621053548aa589117cbe2a183))


### Documentation

* minor formatting changes ([#81](https://github.com/clear-street/studio-sdk-node/issues/81)) ([b768b9b](https://github.com/clear-street/studio-sdk-node/commit/b768b9b0b3f461ade603908aba3ac7e164488f60))

## 0.1.0-alpha.17 (2024-12-19)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Features

* **api:** add average cost to positions ([#78](https://github.com/clear-street/studio-sdk-node/issues/78)) ([10bd7e6](https://github.com/clear-street/studio-sdk-node/commit/10bd7e6221af9757041df1115ffbb60fc591f6b6))

## 0.1.0-alpha.16 (2024-12-17)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Chores

* **internal:** codegen related update ([#75](https://github.com/clear-street/studio-sdk-node/issues/75)) ([8512182](https://github.com/clear-street/studio-sdk-node/commit/85121825823399954cdcba771f4d3757e739edac))
* **internal:** codegen related update ([#76](https://github.com/clear-street/studio-sdk-node/issues/76)) ([2f50957](https://github.com/clear-street/studio-sdk-node/commit/2f509570c4480ecf015e78e5497d20de817d1b8a))
* **internal:** remove unnecessary getRequestClient function ([#73](https://github.com/clear-street/studio-sdk-node/issues/73)) ([bc28efe](https://github.com/clear-street/studio-sdk-node/commit/bc28efeed973ea9104eaf4f5144877d0133eeecd))

## 0.1.0-alpha.15 (2024-12-09)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* **api:** account number support ([#70](https://github.com/clear-street/studio-sdk-node/issues/70)) ([884f5a7](https://github.com/clear-street/studio-sdk-node/commit/884f5a785ea47610ca690acba42b68d3af2a6517))

## 0.1.0-alpha.14 (2024-11-29)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Features

* **api:** add modify orders endpoint ([#67](https://github.com/clear-street/studio-sdk-node/issues/67)) ([8e67f34](https://github.com/clear-street/studio-sdk-node/commit/8e67f342437ac40e5e3f1373194154b2e88cc81f))

## 0.1.0-alpha.13 (2024-11-28)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **internal:** make git install file structure match npm ([#65](https://github.com/clear-street/studio-sdk-node/issues/65)) ([0a97e8d](https://github.com/clear-street/studio-sdk-node/commit/0a97e8dac6a65c9354d80fd3da7d4ba0add30ad3))


### Chores

* **internal:** version bump ([#56](https://github.com/clear-street/studio-sdk-node/issues/56)) ([edbfb81](https://github.com/clear-street/studio-sdk-node/commit/edbfb81a999c641559f5509af03c904223d26340))
* rebuild project due to codegen change ([#58](https://github.com/clear-street/studio-sdk-node/issues/58)) ([9de16eb](https://github.com/clear-street/studio-sdk-node/commit/9de16eb6782a634457f9d1c301764637f5296e52))
* rebuild project due to codegen change ([#59](https://github.com/clear-street/studio-sdk-node/issues/59)) ([d4c4b6b](https://github.com/clear-street/studio-sdk-node/commit/d4c4b6bc92160bbe6d011723502688ccb4a93a76))
* rebuild project due to codegen change ([#60](https://github.com/clear-street/studio-sdk-node/issues/60)) ([3e9fb2b](https://github.com/clear-street/studio-sdk-node/commit/3e9fb2bc4de1b0ca2506ce46b010fba1b70492ab))
* rebuild project due to codegen change ([#61](https://github.com/clear-street/studio-sdk-node/issues/61)) ([677ee27](https://github.com/clear-street/studio-sdk-node/commit/677ee2768857d7f3e1a6312d4b6adaaccb84bb7b))
* rebuild project due to codegen change ([#62](https://github.com/clear-street/studio-sdk-node/issues/62)) ([bfe87b7](https://github.com/clear-street/studio-sdk-node/commit/bfe87b739732e335dbb66c77d5a5ca17ded60d4a))
* remove redundant word in comment ([#64](https://github.com/clear-street/studio-sdk-node/issues/64)) ([cc8bab8](https://github.com/clear-street/studio-sdk-node/commit/cc8bab80186d5f5a0c1ffcac082c62f18c5dc231))


### Documentation

* remove suggestion to use `npm` call out ([#63](https://github.com/clear-street/studio-sdk-node/issues/63)) ([face38a](https://github.com/clear-street/studio-sdk-node/commit/face38a396911e3f80722c99ceb49254e1a6149c))

## 0.1.0-alpha.12 (2024-11-01)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.12](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.10...v0.1.0-alpha.12)

### Features

* **api:** enable inventories endpoint ([#54](https://github.com/clear-street/studio-sdk-node/issues/54)) ([8b58322](https://github.com/clear-street/studio-sdk-node/commit/8b58322a671d6f51b422b4a1ef46b36bf9c43b25))

## 0.1.0-alpha.10 (2024-10-11)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([#51](https://github.com/clear-street/studio-sdk-node/issues/51)) ([cdb8fae](https://github.com/clear-street/studio-sdk-node/commit/cdb8faed5ddafdfcc846a303db616ffe0cac7420))

## 0.1.0-alpha.9 (2024-10-04)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** Add DMA and Stop Limit order support ([#47](https://github.com/clear-street/studio-sdk-node/issues/47)) ([fdfa1ad](https://github.com/clear-street/studio-sdk-node/commit/fdfa1adcab9c16f72c7ee0aea11f9c46ed0b95c2))


### Bug Fixes

* **errors:** pass message through to APIConnectionError ([#45](https://github.com/clear-street/studio-sdk-node/issues/45)) ([ae4fcd9](https://github.com/clear-street/studio-sdk-node/commit/ae4fcd97f438723960a8cb94fb3af9f01f315a6c))


### Chores

* better object fallback behaviour for casting errors ([#46](https://github.com/clear-street/studio-sdk-node/issues/46)) ([3988a44](https://github.com/clear-street/studio-sdk-node/commit/3988a441c0260d3c479f17cc7a06e72ba7daa500))
* **internal:** codegen related update ([#42](https://github.com/clear-street/studio-sdk-node/issues/42)) ([8894f9a](https://github.com/clear-street/studio-sdk-node/commit/8894f9a601f944512d6067beefe8e795f5aef6b7))
* **internal:** codegen related update ([#44](https://github.com/clear-street/studio-sdk-node/issues/44)) ([df7afcc](https://github.com/clear-street/studio-sdk-node/commit/df7afcc4a8cd60d9c877ddefc072d960ffcb4c43))
* **internal:** codegen related update ([#48](https://github.com/clear-street/studio-sdk-node/issues/48)) ([a58305a](https://github.com/clear-street/studio-sdk-node/commit/a58305a2d77c682034f6d2ede270ee2b3dd4d84b))
* **internal:** codegen related update ([#49](https://github.com/clear-street/studio-sdk-node/issues/49)) ([0eb3eed](https://github.com/clear-street/studio-sdk-node/commit/0eb3eed05e41a9df41ac795168df9e7204283dea))

## 0.1.0-alpha.8 (2024-09-05)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** add sandbox url ([#35](https://github.com/clear-street/studio-sdk-node/issues/35)) ([b8c89d3](https://github.com/clear-street/studio-sdk-node/commit/b8c89d37a49fa427b9fe0c6e597925b916ce69cd))


### Bug Fixes

* **client:** correct File construction from node-fetch Responses ([#34](https://github.com/clear-street/studio-sdk-node/issues/34)) ([6e03d20](https://github.com/clear-street/studio-sdk-node/commit/6e03d207e097dd9897d5ab5bc8738345ca386551))
* **uploads:** avoid making redundant memory copies ([#37](https://github.com/clear-street/studio-sdk-node/issues/37)) ([865845b](https://github.com/clear-street/studio-sdk-node/commit/865845bd96b35a15b4feafb9bc841249763fb6e4))


### Chores

* **internal:** dependency updates ([#36](https://github.com/clear-street/studio-sdk-node/issues/36)) ([9fc8102](https://github.com/clear-street/studio-sdk-node/commit/9fc8102d8f5f8596895d744550861ff9f8904ec2))

## 0.1.0-alpha.7 (2024-08-30)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** update via SDK Studio ([#30](https://github.com/clear-street/studio-sdk-node/issues/30)) ([ad826be](https://github.com/clear-street/studio-sdk-node/commit/ad826be6ea6678b03691ab72e9eb89f882772be9))
* **api:** update via SDK Studio ([#31](https://github.com/clear-street/studio-sdk-node/issues/31)) ([6138a55](https://github.com/clear-street/studio-sdk-node/commit/6138a557b80a6cae32b1dcb2ae27d38f223e60bd))


### Chores

* **ci:** install deps via ./script/bootstrap ([#29](https://github.com/clear-street/studio-sdk-node/issues/29)) ([19b9d30](https://github.com/clear-street/studio-sdk-node/commit/19b9d3003c642234a8180f9ec82573fd1957e082))
* run tsc as part of lint script ([#27](https://github.com/clear-street/studio-sdk-node/issues/27)) ([c2e864b](https://github.com/clear-street/studio-sdk-node/commit/c2e864b0f771fc58d577eb32b36bdd1f986e7ccc))

## 0.1.0-alpha.6 (2024-08-27)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** update via SDK Studio ([#21](https://github.com/clear-street/studio-sdk-node/issues/21)) ([263a81c](https://github.com/clear-street/studio-sdk-node/commit/263a81c85ccdabaf193f9fe8326adefa2e9251dd))
* **api:** update via SDK Studio ([#23](https://github.com/clear-street/studio-sdk-node/issues/23)) ([8a3ba42](https://github.com/clear-street/studio-sdk-node/commit/8a3ba42c8ee7de70b137e44afe686c51bf8d7bfc))


### Chores

* **ci:** check for build errors ([#25](https://github.com/clear-street/studio-sdk-node/issues/25)) ([8b0b570](https://github.com/clear-street/studio-sdk-node/commit/8b0b570921c493ada8ea48aa5d45cc1e1ef286c9))
* **internal:** codegen related update ([#24](https://github.com/clear-street/studio-sdk-node/issues/24)) ([22224c7](https://github.com/clear-street/studio-sdk-node/commit/22224c7f86fc581292aabc38bb49f292631500aa))

## 0.1.0-alpha.5 (2024-07-10)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** update via SDK Studio ([#17](https://github.com/clear-street/studio-sdk-node/issues/17)) ([ed7b579](https://github.com/clear-street/studio-sdk-node/commit/ed7b57926b5636ec40afe3f5f9eada82fdf677f5))
* **api:** update via SDK Studio ([#19](https://github.com/clear-street/studio-sdk-node/issues/19)) ([aad2b4c](https://github.com/clear-street/studio-sdk-node/commit/aad2b4c9c3473e992d8d08bef84a3f61c45fe1ab))

## 0.1.0-alpha.4 (2024-07-10)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([#14](https://github.com/clear-street/studio-sdk-node/issues/14)) ([e36f6f4](https://github.com/clear-street/studio-sdk-node/commit/e36f6f4ec4d991bc59513570285b00edf4847262))

## 0.1.0-alpha.3 (2024-07-10)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** update via SDK Studio ([#11](https://github.com/clear-street/studio-sdk-node/issues/11)) ([b3332ad](https://github.com/clear-street/studio-sdk-node/commit/b3332ad683af9368bacc19f9b5035a73138a3bcd))


### Chores

* update SDK settings ([#9](https://github.com/clear-street/studio-sdk-node/issues/9)) ([5b5b9bb](https://github.com/clear-street/studio-sdk-node/commit/5b5b9bb2c1727faccbfdb782d9b1752faeaae747))

## 0.1.0-alpha.2 (2024-07-09)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/clear-street/studio-sdk-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([#6](https://github.com/clear-street/studio-sdk-node/issues/6)) ([290bd35](https://github.com/clear-street/studio-sdk-node/commit/290bd3543fbbd77f8e9858dfafbc4dfc628effd7))

## 0.1.0-alpha.1 (2024-07-09)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/clear-street/studio-sdk-node/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([#3](https://github.com/clear-street/studio-sdk-node/issues/3)) ([17b3504](https://github.com/clear-street/studio-sdk-node/commit/17b3504673b9f3df9e09e34e0cac8887821fa950))

## 0.0.1-alpha.1 (2024-07-09)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/clear-street/studio-sdk-node/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* go live ([#2](https://github.com/clear-street/studio-sdk-node/issues/2)) ([ae55324](https://github.com/clear-street/studio-sdk-node/commit/ae553245a799725722002e505c86f8a890e7ae53))
* update SDK settings ([ced4fd5](https://github.com/clear-street/studio-sdk-node/commit/ced4fd5ea0d79a15245c1a88ffaf6e245bbc46b7))
