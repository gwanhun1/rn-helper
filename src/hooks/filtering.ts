import Filter from 'badwords-ko';

export function hasBadWords(text) {
  const filter = new Filter();
  if (filter.clean(text).includes('**')) {
    alert('비속어가 포합되어있습니다.');
    return false;
  }
  for (const word of badWords) {
    if (text.includes(word)) {
      alert('비속어가 포합되어있습니다.');
      return false;
    }
  }
  return true;
}

const badWords = [
  '시이이발',
  '개새끼',
  '등신',
  '련아',
  '년이',
  'ㅂㅅ',
  '장애인',
  '병신',
  'ㅅㅂ',
  '섹스',
  '성기',
  '성관계',
  '꼬추',
  '자지',
  '보지',
  '가슴',
  '똥꼬',
];
