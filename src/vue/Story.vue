<template>
	<div class="page-container">
		<Index :src="indexImg" title="Story"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
Japanese only yet...
			</Markdown>
			<Markdown v-if="locale === 'jp'">
鳥のさえずりが聞こえる<br>
朝日を受けてカーテン越しに鳥の影が見える<br>
望んでもいないのに、また朝がやってきてしまった<br>
永遠に夢の中にいられたらいいのに そこでは痛みも苦しみも全て想像の中に溶ける<br>
<hr>
「おはよう。朝ごはん、できてるわよ」<br>
<hr>
優しい祖母の声がする<br>
どうして優しくしてくれるんだろう<br>
私はもう◾︎*.◾︎/◾︎のに<br>
<hr>
「長期休みだからと言っていつまでも部屋に引きこもっていると気分が滅入ってしまうわ」<br>
<hr>
私は温かいスープを飲みながら祖母の声に耳を傾ける<br>
優しさが痛いのだ 私にはそれを受け止めきれない<br>
いっそ苦しめてくれればいい それで許されるのなら<br>
<hr>
「そうね… せっかくのいい天気ですし。ちょっとお遣いにでも行ってきてくれるかしら？」<br>
<hr>
黙って箸を進める私に祖母はそう問いかけた<br>
正直味はしないが、それでもお腹が減るあたり、私もちゃんと生きているということだろう<br>
<hr>
気乗りはしないが、お遣いくらいお安い御用だ<br>
少しでも祖母の役に立てるのだから<br>
<hr>
食事を終えた私は軽く身支度を済ませ、家を出る<br>
街の人たちの何気ない視線が怖い<br>
心の中でなにを思われているんだろう<br>
きっと私には誰も見向きもしないのに<br>
どう見られているかがひどく気になって仕方がない<br>
<hr>
そそくさと買い物を終えた私は寄り道もせず帰路につく<br>
必要最低限、それ以上の会話は心の中を見透かされそうで怖くなってしまう<br>
どうか誰にも会いませんように<br>
<hr>
「あら、もう帰ったのね。おつかいありがとう」<br>
<hr>
家の近くで祖母が出迎えてくれた<br>
ほっとして涙が出そうになる<br>
いけない、ここで泣いては祖母を不安にさせてしまうだけだ<br>
<hr>
「あのね、◾︎*.。 あなたのいとこが田舎で宿屋をやっているでしょう？<br>
あなたと仲も良かったはずだし、少しの間そこに行って気分転換してくるのはどうかしら<br>
このままずっとここにいても… あなたは辛いでしょう？」<br>
<hr>
「汽車のチケットも取っておいたの あなたさえ行きたければいつでもいけるわ」<br>
<hr>
--------------☾-----------------<br>
<hr>
そうして私は短い療養の旅に出た<br>
滞在の予定は１週間、この短い間に何かが変わるとも思えないが<br>
それでもあの街を出られるのなら、私はすぐにでも逃げ出したかった<br>
だってあの街は…<br>
<hr>
◾︎*.◾︎/◾︎◾︎*.◾︎/◾︎◾︎*.◾︎/◾︎◾︎*.◾︎/◾︎◾︎*.◾︎/◾︎<br>
<hr>
到着までまだ時間があるらしい<br>
午後の陽気に当てられて少し眠気がやってきた<br>
眠れるうちに眠っておこう<br>
<hr>
夢の中では辛いことも忘れられるから<br>
<hr>
“GoodNightDream”
			</Markdown>
		</div>
	</div>
</template>

<script>
	const Index = require("./components/Index.vue")
	const Markdown = require("./components/Markdown.vue")

	module.exports = {
		components: {
			Index,
			Markdown
		},
		data() {
			return {
				indexImg: require("../img/top_left.png")
			}
		},
		methods: {
		},
		computed: {
			locale() {
				// console.log(this.$store.getters.getLocale)
				return this.$store.getters.getLocale
			}
		}
	}
</script>

<style scoped>
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10%;
	}
	.discription {
		width: 100%;
		text-align: center;
	}
</style>
