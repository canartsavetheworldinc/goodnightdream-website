<template>
	<div class="page-container">
		<Index :src="indexImg" title="Story" :character="indexCharaImg"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
“Introduction”<br>
<br>
Birds are singing.<br>
<br>
As the sunlight comes in, their shades are being cast on the curtain.<br>
<br>
Regardless wheter or not, the sun rises everyday.<br>
<br>
I wish I could stay in dreams forever,<br>
<br>
because everything painful melts into a fancy there.<br>
<br>
“Good mornigh honey. Breakfast is ready.”<br>
<br>
I heard my grandma’s gentle voice<br>
<br>
Am I worthy for her kindness?<br>
<br>
though I already ◾︎*.◾︎/◾︎<br>
<hr>
“Even if you are in vacation, staying in your room all day long might make you depressed.”<br>
<br>
I tasted a hot soup, and listened to her wordlessly.<br>
Affection is painful to me.<br>
I don’t feel that I have the right to demand to take it.<br>
<br>
“Well, alright. I will make some sweets today. Could you go to buy the ingredients? The weather is good today.”<br>
<br>
To me eating without response, she asked.<br>
<br>
Honestly, I am not feeling like to go out,<br>
but it is a piece of cake if i can be helpful to someone.<br>
<br>
After finish the breakfast, I got my ready.<br>
Ok, take a breath, it’s not a hard job.<br>
<br>
How do I appear to people?<br>
I fell so nervaous when they look at me casually.<br>
<br>
I know.<br>
I know they don’t care about me at all.<br>
<br>
Even tough I understand in my head,<br>
I get really edgy about how I look.<br>
<br>
Quickly finished shopping, then I got on my way back home.<br>
<br>
Please, please never meet anyone who knows me.<br>
<hr>
“Oh, welcome back. That was really quick.”<br>
<br>
Grandma was waiting for me near our home.<br>
<br>
I was so relieved, and tears were about to come out.<br>
<br>
No.<br>
<br>
If I shed tears right now, that will make her uneasy.<br>
<br>
"Hey ◾︎*.。, do you remember your cousin are managing the inn in the coutry side? I guess you guys are kinda close. So… how about staying at his inn in the rest of the vacation?<br>
<hr>
You can stay here if you like… but you…<br>
<hr>
I’ve already taken a train ticket for you. You can go to his inn anytime you want."<br>
<br>
--------------　☾　-----------------<br>
<br>
So, I set off on my short journey.<br>
<br>
The plan of my trip is a week.<br>
I don’t think something will change in such short time.<br>
<br>
However, I wanted to escape from that city if I could.<br>
<br>
Because that city was…<br>
<hr>
I may still have time until this train will arrive at the destination.<br>
<br>
As I got afternoon sunshine, I felt little bit sleepy.<br>
<br>
Let’s take a nap while I can sleep,<br>
<br>
because everything painful melts in a fancy in a dream.<br>
<br>
“GoodNightDream”
			</Markdown>
			<Markdown v-if="locale === 'jp'">
小鳥のさえずりが聞こえる.<br>
<br>
朝日を受けて, カーテンに鳥たちの影が差している.<br>
<br>
望んでもいないのに, また朝がやってきた.<br>
<br>
永遠に夢の中にいられたらいい,<br>
夢の中では, 痛みも, 苦しみも, 全て想像のうちに溶けてしまうから.<br>
<br>
「おはよう。朝ごはん、できてるわよ」<br>
<br>
祖母の優しい声がする.<br>
優しくしてもらう権利なんてあるんだろうか,<br>
<br>
私にはもう◾︎*.◾︎/◾︎のに<br>
<hr>
「長期休みだからといって、部屋に引きこもっていると気分が滅入ってしまうわよ？」<br>
<br>
私は温かいスープに口をつけ, 祖母の声に黙って耳を傾ける.<br>
優しさが痛いのだ, 私にはそれを受け止める資格がない.<br>
<br>
「そうね… 今日はお菓子でも作ろうかしら。せっかくのいい天気だし、お遣いにでも行ってきてくれる？」<br>
<br>
黙ったまま箸を進めようとした私に, 祖母はそう問いかけた.<br>
<br>
気乗りはしないが, お遣いくらいお安い御用だ,<br>
少しでも誰かの役に立てるのだから.<br>
<br>
食事を終えた私は, 軽く身支度を済ませ, 家を出た.<br>
<br>
町の人たちの何気ない視線に, 自然と肩が竦んでしまう.<br>
彼らの心の中で, 私はどう思われているんだろう.<br>
<br>
誰も私を気に掛けていないことなど, 頭ではわかっているのだけれど,<br>
どう見られているかがひどく気になって仕方がない.<br>
<br>
そそくさと買い物を終えた私は寄り道もせず帰路につく.<br>
必要最低限, それ以上の会話は, 心の中を見透かされそうで怖くなってしまう.<br>
<br>
どうか誰にも会いませんように<br>
<hr>
「あら、もう帰ったのね。おつかいありがとう」<br>
<br>
家の近くで祖母が出迎えてくれた.<br>
<br>
ほっとして涙が出そうになる.<br>
<br>
いけない.<br>
<br>
ここで泣いては, 祖母を不安にさせてしまうだけだ.<br>
<br>
「あのね、◾︎*.。 あなたのいとこが田舎で宿屋をやっているでしょう？<br>
あなたと仲も良かったはずだし、少しの間そこに行って気分転換してくるのはどうかしら？<br>
<hr>
このままずっとここにいても… あなたは…<br>
<hr>
…汽車のチケットも取っておいたの, あなたさえ行きたければ, いつでもいけるからね.」<br>
<br>
--------------　☾　-----------------<br>
<br>
そうして私は短い療養の旅に出た.<br>
<br>
滞在の予定は１週間、この短い間に何かが変わるとは思えない.<br>
<br>
それでもあの街を出られるのなら, 私はすぐにでも逃げ出したかった<br>
<br>
だってあの街は…<br>
<hr>
到着までまだ時間があるらしい.<br>
<br>
午後の陽気に当てられて少し眠気がやってきた.<br>
<br>
眠れるうちに眠っておこう,<br>
<br>
夢の中では辛いことも忘れられるから<br>
<br>
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
				indexImg: require("../img/top_left.png"),
				indexCharaImg: require("../img/walking_forward-story.gif")
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
	@media(max-width:768px) {
		.page-container {
			margin: 0 17px;
		}
	}
</style>
