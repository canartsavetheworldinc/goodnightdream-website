<template>
	<div class="top-container">
		<div class="discription">
			<div v-if="clickCount === 2">
				<div even>
					<Markdown v-if="locale === 'en'">
”˙ɯɐǝɹp pooɓ ɐ ǝʌɐɥ noʎ ǝdoH ˙ʇɥɓıu poo⅁“<br>
<br>
ᴬⁿ ʷᵒᵐᵃⁿ undertaking a management of Dreaminn for some reasons Ŧคςє worries and dreams of visitors in their “dreams”<br>
<br>
What ɖօ people having hopes and troubles ᏕᏋᏋ in “dreams”?<br>
<br>
This is the RPG making “DREAMS” come true
					</Markdown>
					<Markdown v-if="locale === 'jp'">
「縲後♀縺ｯ繧医≧ 逶ｮ隕壹ａ縺ｯ縺ｩ縺�□縺�ｼ溘」<br>
<br>
とある理由から宿屋の管理を引き受けた荳ｻ莠ｺ蜈ｬは 夢の中で宿泊客の悩みと夢に向き合っていく<br>
<br>
悩みや希望を抱え 人々は何を “ユメ” に見たのか<br>
<br>
蜷帙→菫ｺの “ユメ” を叶える 窶懷､｢迚ｩ隱樞 鄒､蜒丞括
					</Markdown>
				</div>
			</div>
			<div v-else-if="clickCount === 3">
				<div>
					<Markdown v-if="locale === 'en'">
What do you expect to see?
					</Markdown>
					<Markdown v-if="locale === 'jp'">
何？そんなにタイトルが気になる？
					</Markdown>
				</div>
			</div>
			<div v-else-if="clickCount === 4">
				<div even>
					<Markdown v-if="locale === 'en'">
Hahha, so how about this?
					</Markdown>
					<Markdown v-if="locale === 'jp'">
はは！じゃあこんなのはどうさ！
					</Markdown>
				</div>
			</div>
			<div v-else-if="clickCount === 5">
				<div>
					<Markdown v-if="locale === 'en'">
Because you did something needless
					</Markdown>
					<Markdown v-if="locale === 'jp'">
君が余計なことをするからだぜ
					</Markdown>
				</div>
			</div>
			<div v-else-if="clickCount === 6">
				<div even>
					<Markdown v-if="locale === 'en'">
What? Do you want to recover this?
					</Markdown>
					<Markdown v-if="locale === 'jp'">
何？元に戻したいの？
					</Markdown>
				</div>
			</div>
			<div v-else-if="clickCount === 7">
				<div>
					<Markdown v-if="locale === 'en'">
Ok, let’s start again
					</Markdown>
					<Markdown v-if="locale === 'jp'">
それじゃあ最初からやり直そう
					</Markdown>
				</div>
			</div>
			<div v-else-if="clickCount > 7">
				<div even>
					<Markdown v-if="locale === 'en'">
“̧͠G̷ơ͢o̸̸̴d̛̀҉ ̴mó̴̸r̛͝҉n̡i̷͜n̶g̶̶. ̸̶͝H̢o̴͢ẁ͟ ̸̀͟w̛a̕͞s̀͡ ̶ý̸ò̢ų̡r ̵͢ḑ́r͜ę͜àm̧͏?̴̀”̶<br>
<br>
̧Y҉ou͏҉ ͏ undertaking a management of Dreaminn for some reasons faced worries and dreams of visitors in their “dreams”<br>
<br>
What did people having hopes and troubles had seen in “dreams”?<br>
<br>
This is the RPG making our “DREAMS” come true
					</Markdown>
					<Markdown v-if="locale === 'jp'">
「おはよう 目覚めはどうだい？」<br>
<br>
とある理由から宿屋の管理を引き受けた君は 夢の中で宿泊客の悩みと夢に向き合っていく<br>
<br>
悩みや希望を抱え 人々は何を “?.◾︎” に見たのか<br>
<br>
君と俺の “?.◾︎” を叶える “夢物語” 群像劇
					</Markdown>
				</div>
			</div>
			<div v-else>
				<Markdown v-if="locale === 'en'">
“Good night. Hope you have a good dream.”<br>
<br>
An woman undertaking a management of Dreaminn for some reasons face worries and dreams of visitors in their “dreams”<br>
<br>
What do people having hopes and troubles see in “dreams”?<br>
<br>
This is the RPG making “DREAMS” of ◾︎*.◾︎/◾︎ come true
				</Markdown>
				<Markdown v-if="locale === 'jp'">
「おやすみなさい よい夢を」<br>
<br>
とある理由から宿屋の管理を引き受けた主人公は 夢の中で宿泊客の悩みと夢に向き合っていく<br>
<br>
悩みや希望を抱え 人々は何を “ユメ” に見るのか<br>
<br>
◾︎*.◾︎/◾︎の “ユメ” を叶える “夢物語” RPG
				</Markdown>
			</div>
		</div>
		<div class="main-links">
			<MainLink class="main-link story" :src="mainLinks.story" title="Story" href="/story"></MainLink>
			<MainLink class="main-link about" :src="mainLinks.about" title="About" href="/about"></MainLink>
			<MainLink class="main-link demo" :src="mainLinks.demo" title="Demo" href="/demo"></MainLink>
		</div>
		<div class="main-links">
			<MainLink class="main-link twitter" :src="mainLinks.twitter" title="Twitter" ahref="https://twitter.com/goodnightdream_"></MainLink>
		</div>
	</div>
</template>

<script>
	const MainLink = require("./components/MainLink.vue")
	const Markdown = require("./components/Markdown.vue")

	module.exports = {
		components: {
			MainLink,
			Markdown
		},
		data() {
			return {
				mainLinks: {
					story: require("../img/top_left.png"),
					about: require("../img/top_center.png"),
					demo: require("../img/top_right.png"),
					twitter: require("../img/twitter_logo.png")
				}
			}
		},
		methods: {
		},
		computed: {
			locale() {
				// console.log(this.$store.getters.getLocale)
				return this.$store.getters.getLocale
			},
			clickCount() {
				return this.$store.getters.logoClickCount
			}
		}
	}
</script>

<style scoped>
	.top-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10%;
	}
	.discription {
		margin: 15px 0 35px 0;
		text-align: center;
	}
	.main-links {
		width: 100%;
		margin: 40px 0;
		display: flex;
		justify-content: space-around;
	}
	.main-link {
		width: 105px;
	}
	.main-link.about {
		transform: translateY(-20px);
	}
	.main-link.twitter {
		width: 56px;
	}
	@media(max-width:768px) {
		.top-container {
			margin: 0 17px;
		}
		.discription {
			margin: 5px 0 35px 0;
		}
		.main-links {
			margin: 5px 0 5px 0;
		}
		.main-link {
			width: 55px;
		}
	}
</style>
