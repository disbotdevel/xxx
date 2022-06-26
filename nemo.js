const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Moment = require('moment');


client.on('ready', () => {
  console.log(`Blimydzy Partiye Katıldı ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as');
};
  if (msg.content === 'Sunucuya hoş geldin') {
    msg.channel.send('Sunucuya hoş geldin! Lütfen Rollerini Almayı Unutma <#882575689591705600> <#878211593106771988><#858333710864089118><#858333497751109673><#858333520509141002><#858332558776991775><#858332528229613619>');
};
  if (msg.content === 'Sunucuya hoş geldiniz') {
    msg.channel.send('Sunucuya hoş geldiniz! Lütfen Rollerini Almayı Unutmayın <#882575689591705600> <#878211593106771988><#858333710864089118><#858333497751109673><#858333520509141002><#858332558776991775><#858332528229613619>');
};
  if (msg.content === 'Sunucuya Hoşgeldin') {
    msg.channel.send('Sunucuya Hoş geldin! Lütfen Rollerini Almayı Unutma <#882575689591705600> <#878211593106771988><#858333710864089118><#858333497751109673><#858333520509141002><#858332558776991775><#858332528229613619>');
};
  if (msg.content === 'Sunucuya Hoşgeldiniz') {
    msg.channel.send('Sunucuya Hoş geldiniz! Lütfen Rollerini Almayı Unutma <#882575689591705600> <#878211593106771988><#858333710864089118><#858333497751109673><#858333520509141002><#858332558776991775><#858332528229613619>');
};
  if (msg.content === 'Sa') {
    msg.reply('as hoşgeldin');
}; 
 if (msg.content === 'tatlısın') {
    msg.channel.send('Teşekkür ederim!');
};
  if (msg.content === 'Tara sana tatlısın dedi') {
    msg.channel.send('Teşekkür ederim!');
};
  if (msg.content === 'çok tatlısın') {
    msg.channel.send('Teşekkür ederim!');
}; 
  if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam');
};
  if (msg.content === 'Selamün Aleyküm') {
    msg.reply('Aleyküm Selam');
};
 if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam');
};
 if (msg.content === 'Selam') {
    msg.reply('Selam Hoşgeldin!');
};
 if (msg.content === 'selam') {
    msg.reply('Selam Hoşgeldin!');
};
 if (msg.content === 'Slm') {
    msg.reply('Selam Hoşgeldin!');
};
 if (msg.content === 'slm') {
    msg.reply('Selam Hoşgeldin!');
};
 if (msg.content === 'selam varoşlar') {
    msg.reply('Selam!');
};
 if (msg.content === 'Selam varoslar') {
    msg.reply('Selam!');
};
 if (msg.content === 'Selam varoşlar') {
    msg.reply('Selam!');
};
 if (msg.content === 'selam varoslar') {
    msg.reply('Selam!');
};
 if (msg.content === 'selam varoslae') {
    msg.reply('Selam!');
};
 if (msg.content === 'iyi') {
    msg.reply('Her zaman iyi ol!');
};
 if (msg.content === 'kötü') {
    msg.reply('Umarım kısa sürede kendini iyi hissedersin :confused: ');
};
});







//Prefix Deneme
client.on('message' , message => {
if (message.content.startsWith('k!prefix')) {
const embed = new MessageEmbed()
.setTitle('KPOP FOREVER')
.setDescription("<:pembeyildizlar:929686711460569099> Bu benim prefixim: k! \n k!yardım yazarak komutlarıma ulaşabilirsin. <:pembeyildizlar:929686711460569099>")
.setColor("RANDOM")
.setFooter('Kpop Forever');
message.channel.send({ embed: embed }).then( embedMessage => {
embedMessage.react(" ")
embedMessage.react(" ")
})
}
})


















client.on('message' , message => {
if (message.content.startsWith('k!oyla-iki')) {
const args = message.content.split(' ').slice(1)
const botmesajı = args.join(" ")
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için yeterli yetkin yok!');
if (!botmesajı) return message.reply('Oylamanın ne olduğunu yazmadınız.');
message.delete(message.author)
const embed = new MessageEmbed()
.setTitle('OYLAMA')
.setDescription(botmesajı)
.setFooter('Kpop Forever');
message.channel.send({ embed: embed }).then( embedMessage => {
embedMessage.react("1️⃣")
embedMessage.react("2️⃣")
})
}
})




client.on('message' , message => {
if (message.content.startsWith('k!oyla-dört')) {
const args = message.content.split(' ').slice(1)
const botmesajı = args.join(" ")
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için yeterli yetkin yok!');
if (!botmesajı) return message.reply('Oylamanın ne olduğunu yazmadınız.');
message.delete(message.author)
const embed = new MessageEmbed()
.setTitle('OYLAMA')
.setDescription(botmesajı)
.setFooter('Kpop Forever');
message.channel.send({ embed: embed }).then( embedMessage => {
embedMessage.react("1️⃣")
embedMessage.react("2️⃣")
embedMessage.react("3️⃣")
embedMessage.react("4️⃣")
})
}
})







client.on('message' , message => {
if (message.content.startsWith('k!nor-oyla')) {
const args = message.content.split(' ').slice(1)
const botmesajı = args.join(" ")
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için yeterli yetkin yok!');
if (!botmesajı) return message.reply('Oylamanın ne olduğunu yazmadınız.');
message.delete(message.author)
const embed = new MessageEmbed()
.setTitle('OYLAMA')
.setDescription(botmesajı)
.setFooter('Kpop Forever');
message.channel.send({ embed: embed }).then( embedMessage => {
embedMessage.react("✔️")
embedMessage.react("✖️")
})
}
})



client.on('message' , message => {
if (message.content.startsWith('k!av')) {
const args = message.content.split(' ').slice(1)
const botmesajı2 = (message.author.displayAvatarURL())
const embed = new MessageEmbed()
.setAuthor(`Avatar`)
.setTitle('Avatar Linki')
.setURL((message.author.displayAvatarURL()))
.setFooter('Kpop Forever')
.addField('İsteyen', `${message.author}`)
.setImage(botmesajı2)
.setColor("RANDOM")
message.channel.send({ embed: embed }).then( embedMessage => {
          embedMessage.react("❤️")
})
}
})









client.on("message",message=>{
  console.log("gelen mesaj: "+message.content)

    const parsedMessage2=message.content.split(" ")
   


   
    switch (parsedMessage2[0]) {
      case "k!sil":
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Bu Komutu Kullanmak İçin Yeterli Yetkin Yok Hayırdır?')
        message.delete()
        if(!parsedMessage2[1]) return message.reply('1 ile 100 Arası Bir Sayı Gir!')
       
        if(parsedMessage2[1] > 100) return message.reply('La 100`den fazla Mesajı Nasıl Sileyim??')
       
        if(isNaN(parsedMessage2[1])) return message.reply('Aynen Karşim Kesin Sayı Girdin :) ')

       
       
        message.channel.bulkDelete(parsedMessage2[1]);
        if (!message.channel.bulkDelete(parsedMessage2[1]))return message.channel.send("Mesaj Süresi 14 Günü Geçmiş Silemem Bunu!")
        message.reply(`${parsedMessage2[1]} Tane Mesaj Sildim.`).then(msg => msg.delete({timeout: 10000}.then))
        return
       }




}

)




















client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('k!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yeterli Yetki Yok Sen Hayırdır?')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'genel')
           log.send(`${user.tag} kişisi kicklenmiştir`);
          })
          .catch(err => {
            message.reply('Bunu Yapamam (Kişi Kicklenmiş Olabilir)');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});


























client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('k!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yeterli Yetki Yok Sen Hayırdır?')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'genel')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Üzgünüm Bunu Yapamam');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});




client.on('guildMemberAdd', member => {
	const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '⋆ଘ🍦﹕hg﹕ഒ₊');
	girişçıkış.send(`Bu Harika Sunucuya Hoşgeldin, ${member} Rollerini Almayı Unutma!`);
});
client.on('guildMemberAdd', member => {
	const kayit = member.guild.channels.cache.find(channel => channel.name === '﹕˚₊୨🧇୧・kayıt-chat');
	kayit.send(`Hoşgeldin, ${member} Lütfen Yetkili Bekle. En Kısa Sürede İlgileneceklerdir`);
});
client.on('guildMemberAdd', member => {
	const kayit = member.guild.channels.cache.find(channel => channel.name === '﹕˚₊୨🧇୧・kayıt-chat');
	kayit.send(`Lütfen formu doldurabilir misiniz?`);
});


client.on('guildMemberAdd', member => {
	member.send(`Seni Aramızda Gördüğümüz İçin Çok Sevindik Lütfen Bekle Yetkili Kayıt Edecektir`);
});





client.on('ready', () => {
 client.user.setActivity(`Hedef: 1050 Kişi!`)
});



client.on('ready', () => {
 client.user.setActivity(`k!yardım`)
});










//yardım V2
client.on('message' , message => {
if (message.content.startsWith('k!yardım')) {
const args = message.content.split(' ').slice(1)
const embed = new MessageEmbed()
.setTitle("<:bluemacaron:929785798763630592> YARDIM <:bluemacaron:929785798763630592>")
.setDescription('Komutlarım')
.setColor("BLUE")
.addField('k!kick ile kişi kicklerim', 'k!ban ile kişi banlarım')
.addField('k!oyuncuara ile sunucuda kişi ararım', 'k!av ile avatarına bakabilirsin')
.addField('k!sil ile mesaj silebilirim', 'k!nor-oyla ile tik ve x işareti ile oylama yaparım')
.addField('k!oyla-iki ile iki seçenekli oylama', 'k!oyla-dört ile dört seçenekli oylama yaparım')
.addField('İsteyen:', `${message.author}`)
message.channel.send({ embed: embed }).then( embedMessage => {
embedMessage.react(" ")
embedMessage.react(" ")
})
}
})






//Kurallar V1
client.on('message' , message => {
if (message.content.startsWith('k!kurallar')) {
const args = message.content.split(' ').slice(1)
const ava = (message.author.displayAvatarURL())
const adam = `${message.footer}`
const embed = new MessageEmbed()
.setTitle("<:9733cake:929793185943785502> ・୨・┈・KURALLAR・┈・୧・ <:9733cake:929793185943785502>")
.setDescription('╭-₊˚ ฅ︰Sunucuya girdiğiniz an bu kuralları kabul ettiğinizi varsayıyoruz ₊˚⊹')
.setColor("RANDOM")
.addField("Okuduğunuzda ✅ İşaretine Basın Lütfen", "🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺")
.addField('﹕˚₊୨ ୧・~Sunucuda din veya ırk ile ilgili tartışmak, bu konularda dalga geçmek yasaktır.', '₊˚⋆ଘ~Ağır küfürler etmek ve rahatsız edici argo kelimeler kullanmak yasaktır.﹕ഒ₊⊹')
.addField('꒰꒰︰୨୧︰~Başka sunucuların reklamını yapmak yasaktır.', "୨୧┊~Caps ile yazmak yasaktır.(Sevinç veya gülme anlamında sınırlı olarak caps kullanılabilir.)ʕ-·-ﻌ-·ᐢ₎-︵・✦")
.addField('╰˚₊୨୧・~Yetkililer ve sunucu üyelerine saygısızlık yapmak yasaktır. ', " ₊˚⸝・~Spam yapmayın (Spam için gerekli chat vardır.)")
.addField('Sunucumuz üzerinden yapılan tartışmalar belirlenen konular dışında siyasi veya ırkçı unsurlar taşıması yasaktır. Bu tip paylaşım ve tartışmalar yapanlar sunucudan ihraç edilecektir.', 'Kurulan sunucu içerisinde müstehcen ve toplumu kine yönlendiren paylaşımlar yapanlar sunucudan ihraç edilecektir. Yapmış olduğu paylaşım Silinecektir.')
.addField('╭-₊˚ฅ₊~Cinsellik ile ilgili konuşmak yasaktır.˚⊹', '﹕˚₊୨୧・~İdollere saygısızlık yapmak küfür etmek vb yasaktır.')
.addField('İsteyen: ', `${message.author} `)
.setThumbnail('https://image.freepik.com/free-vector/pixel-art-book-bit-game-icon_360488-73.jpg')
message.channel.send({ embed: embed }).then( embedMessage => {
embedMessage.react("✅")
embedMessage.react("⬅️")
})
}
})









    


//Form
client.on('message' , message => {
if (message.content.startsWith('k!form')) {
const args = message.content.split(' ').slice(1)
const botmesajı2 = (message.author.displayAvatarURL())
const embed = new MessageEmbed()
.setAuthor(`Hoş Geldin!`)
.setTitle('İşte Form!')
.setColor("RANDOM")
.addField('╭・︶꒦꒷ <:pembeyildizlar:929686711460569099>  İsim ve yaş - ','           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Linki nerden buldun? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Partnerlik yapılan sunucudan yetkili olarak geldiysen hangi sunucu? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('╰・︶꒦꒷ <:pembeyildizlar:929686711460569099>  Tüm soruları cevapladıysan kayıt olmak için rollerini alman yeterli', `${message.author} • Tarafından İstendi`)
.setTimestamp()
message.channel.send({ embed: embed })
}
});


//Form
client.on('message' , message => {
if (message.content.startsWith('K!form')) {
const args = message.content.split(' ').slice(1)
const botmesajı2 = (message.author.displayAvatarURL())
const embed = new MessageEmbed()
.setAuthor(`Hoş Geldin!`)
.setTitle('İşte Form!')
.setColor("RANDOM")
.addField('╭・︶꒦꒷ <:pembeyildizlar:929686711460569099>  İsim ve yaş - ','           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Linki nerden buldun? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Partnerlik yapılan sunucudan yetkili olarak geldiysen hangi sunucu? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('╰・︶꒦꒷ <:pembeyildizlar:929686711460569099>  Tüm soruları cevapladıysan kayıt olmak için rollerini alman yeterli', `${message.author} • Tarafından İstendi`)
.setTimestamp()
message.channel.send({ embed: embed })
}
});


//Form
client.on('message' , message => {
if (message.content.startsWith('k!Form')) {
const args = message.content.split(' ').slice(1)
const botmesajı2 = (message.author.displayAvatarURL())
const embed = new MessageEmbed()
.setAuthor(`Hoş Geldin!`)
.setTitle('İşte Form!')
.setColor("RANDOM")
.addField('╭・︶꒦꒷ <:pembeyildizlar:929686711460569099>  İsim ve yaş - ','           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Linki nerden buldun? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Partnerlik yapılan sunucudan yetkili olarak geldiysen hangi sunucu? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('╰・︶꒦꒷ <:pembeyildizlar:929686711460569099>  Tüm soruları cevapladıysan kayıt olmak için rollerini alman yeterli', `${message.author} • Tarafından İstendi`)
.setTimestamp()
message.channel.send({ embed: embed })
}
});


//Form
client.on('message' , message => {
if (message.content.startsWith('K!Form')) {
const args = message.content.split(' ').slice(1)
const botmesajı2 = (message.author.displayAvatarURL())
const embed = new MessageEmbed()
.setAuthor(`Hoş Geldin!`)
.setTitle('İşte Form!')
.setColor("RANDOM")
.addField('╭・︶꒦꒷ <:pembeyildizlar:929686711460569099>  İsim ve yaş - ','           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Linki nerden buldun? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('﹕・ೃ࿐ <:galppembe_kf:929686675146285077>  Partnerlik yapılan sunucudan yetkili olarak geldiysen hangi sunucu? - ', '           ・୨・─・┈・─・┈・─・୧・')
.addField('╰・︶꒦꒷ <:pembeyildizlar:929686711460569099>  Tüm soruları cevapladıysan kayıt olmak için rollerini alman yeterli', `${message.author} • Tarafından İstendi`)
.setTimestamp()
message.channel.send({ embed: embed })
}
});




// random mesaj
client.on('message', message => {
if (message.content.toLowerCase() === 'k!kpopşaka') {
var Saka1 = [
"https://i.pinimg.com/originals/20/97/03/209703e4164b7cc75d7797c882ff526c.jpg",
"https://i.pinimg.com/736x/f9/3d/17/f93d1736ddb9b6bae31912848b5c8657.jpg",
"https://img.wattpad.com/34cbb01c111a4e9cef7cc329b236dd0be99cf8d6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a363954664b34564143396345773d3d2d3437343234343338322e313465376132636336396337343439393435323431353935333633322e706e67?s=fit&w=720&h=720",
"https://img.wattpad.com/d8064f188eaf4a1d982b645fdf33c83837a916fc/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f54575065547872744438333030513d3d2d39322e313461646136653130336130343436373736313638333336303734332e6a7067?s=fit&w=720&h=720",
"https://img.wattpad.com/e1ce0bd7699e2165182c6e61dcbaf7216103fcde/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f4b347a535963346842517349413d3d2d38302e313465353432633432363966343161633134313939383038363931332e6a7067?s=fit&w=720&h=720",
"https://img.wattpad.com/6fac27428cb3b90a21225d1a3c05ce1a357624a8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5168616f45716f676f31483662513d3d2d3137322e313465663534643335393766383532643839313632373431383839392e6a7067?s=fit&w=720&h=720",
"https://img.wattpad.com/70706699f9f9f3b7db343ba122504dc2ffd75d6a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f704b746f635346653173625368773d3d2d352e313563313538663338323138343733343232353132363130353530362e6a7067?s=fit&w=720&h=720",
"https://i.pinimg.com/474x/14/03/f7/1403f71c981a97ce8b5d63aad87145ba.jpg"
	];
var saka2 = Math.floor(Math.random()*Saka1.length);
const embed = new MessageEmbed()
.setTitle("ŞAKA")
.setColor("PURPLE")
.setImage(`${Saka1[saka2]}` , "Gülmek Herkesin Hakkı (:");
message.channel.send({ embed: embed });
}
})

// random mesaj
client.on('message', message => {
  if (message.content.toLowerCase() === 'k!şaka') {
  var Saka1 = [
  "Rock yapan yaprağa ne denir? \n Yaprak!",
  "Ben yedi gün içiyorum sen on dört gün iç",
  "Yıkanan ton balığına ne denir? \n WASHINGTON",
  "Baykuşlar vedalaşırken ne der? \n BAYYKUŞ!",
  "Siviller hangi dili konuşur? \n SİVİLCE",
  "Rüzgar antik kentte nasıl eser? \n Tarihi Eser",
  "Çocuk eskiden yaramazmış şimdi yarabiliyor",
  "Tuvaletteki 10’a ne denir? \n SİFON",
  "Türkiye’nin en yeni şehri hangisidir? \n NEVŞEHİR",
  "İngilizler kendi kıllarına ne der? \n MICHEAL",
  "En değerli meşe hangisidir? \n İZZET ALTINMEŞE",
  "Dört tarafı suyla çevrili çaya ne denir? \n ADAÇAYI"
    ];
  var saka2 = Math.floor(Math.random()*Saka1.length);
  const embed = new MessageEmbed()
  .setTitle("Soğuk Espriler!")
  .setColor("RANDOM")
  .addField(`${Saka1[saka2]}` , "Bence komikti");
  message.channel.send({ embed: embed });
  }
  })

const durumlar = [

  "K-pop Forever 1.5K!!",
  "Hedefimiz 2K!",
  "k!yardım"
]
setInterval(function () {
let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
client.user.setActivity(durum)
}, 3000);

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'k!ping') {
      msg.channel.send(`Selam! Şu anda pingim: **${client.ws.ping}**`);
    }
  });
	
	
	
	
	
	
	
	
	
	  client.on('message', message => {

    if (message.content.startsWith('k!sunucu')) {
      var guild = message.guild
      var kanal = guild.channels.cache
      var uye = guild.members.cache
      const embed = new MessageEmbed()
      .setTitle(`${guild.name} Adlı Sunucunun Bilgileri; `)
      .addField('SUNUCU BILGILERI:', [
    `*Sunucu Adı:* **${guild.name}**`,
    `*Sunucu Sahibi:* **<@${guild.owner.id}>**`,
        '------------------------------------------------'
      ])
      .addField('UYELER' , [    `*Toplam Üye Sayısı:* **${guild.memberCount}** `,
      `*Üye Sayısı:* **${uye.filter(uye => !uye.user.bot).size}**`,
      `*Bot Sayısı:* **${uye.filter(uye => uye.user.bot).size}**`,
      `*Çevrimiçi:* **${uye.filter(uye => uye.presence.status === 'online').size}**`,
      `*Rahatsız Etmeyin:* **${uye.filter(uye => uye.presence.status === 'dnd').size}**`,
      `*Boşta:* **${uye.filter(uye => uye.presence.status === 'idle').size}**`,
      `*Çevrimdışı:* **${uye.filter(uye => uye.presence.status === 'offline').size}**`,
                            '------------------------------------------------'
    ])
    .addField('KANAL BILGILERI' ,[
      `*Metin Kanalı Sayısı:* **${kanal.filter(kanal => kanal.type === 'text').size}**`,
      `*Ses Kanalı Sayısı:* **${kanal.filter(kanal => kanal.type === 'voice').size}**`,
      `*Kategori Sayısı:* **${kanal.filter(kanal => kanal.type === 'category').size}**`,
      '------------------------------------------------'
    ])
  .setColor("RED")
  .setTimestamp(guild.createdTimestamp)
      message.channel.send({ embed: embed }).then( embedMessage => {
        embedMessage.react(" ")
        embedMessage.react(" ");
})
    
}
})

	
	
	
	
	
	
	
	
	
	  client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === 'k!katıl') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('Bir sesli kanala katılmalısın!');
      }
    }
  });

  client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === 'k!ayrıl') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.leave();
      } else {
        message.reply('Bunu Seslide Yapmalısın!');
      }
    }
  });

client.on('message', async message => {
  if (message.content.startsWith('k!oynat')) {
    const args = message.content.split(' ').slice(1)
    const yurut = args.join(" ")
    if (!yurut) return message.reply('Bir URL Girmelisin Kelimeler ile arayamam :confused: ');
    if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    const ytdl = require('ytdl-core');
    connection.play(ytdl(`${yurut}`, { filter: "audioonly"})).then (message.channel.send(`**Şu anda oynatılıyor:** \n ${yurut}`))
  } else {
    message.reply('Sesli Kanala Katılmalısın!');
  }

  }
})



client.on('message', async message => {
  if (message.content.startsWith('k!durdur')) {
    const args = message.content.split(' ').slice(1)
    const yurut = args.join(" ")
    if (!yurut) return message.reply('bir hata yakalandı :/');
    if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    connection.stop(ytdl(`${yurut}`, { filter: "audioonly"}))
  } else {
    message.reply('Sesli Kanala Katılmalısın!');
  }

  }
})
	
	
	
	

client.login('ODYyMDQ5NzU3MzExNDAyMDI1.YOSsZg.-ZESc_2mGHa7cKxvwT1_QUVeG-4');
