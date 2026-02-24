const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const FORM_RECEIVER_EMAIL = "admin@trytry.jp";
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const i18n = {
  zh: {
    nav_services: "����", nav_advantage: "����", nav_pricing: "�۸�", nav_process: "����", nav_faq: "FAQ", nav_cta: "ԤԼ��ѯ",
    hero_title: "���޴���Ӫ���Ϲ���Ӫ<br/>�������һվʽ����", hero_sub: "����רע�����޾�Ӫ���ӺϹ�����ƽ̨��Ӫ�����������������ĸ����棬Ϊҵ���ṩ������ִ�С����̿�׷�١�����ɽ�������Ӫ������", hero_cta_1: "��ȡ���淽��", hero_cta_2: "�鿴300+�ڹ�ʵ��",
    hero_k1_t: "90���������", hero_k1_d: "������̱��ƽ�����ȷÿ�������ڵ㡣", hero_k2_t: "��ƽ̨���йܿ�", hero_k2_d: "ͳһ�����桢��̬���������������ԡ�", hero_k3_t: "���汾��ִ��", hero_k3_d: "��ɨ��Ѳ�졢������ͻ������ȫ��·��ء�",
    services_title: "����ר�����޴������", s1_t: "��ҵ��Ϲ�", s1_d: "��ҵ�������������Ϲ�·�����顢�ռ���������������������", s2_t: "�ճ���Ӫ", s2_d: "�ͷ�Ӧ����ס�����������Űࡢ�쳣���������۹����", s3_t: "�������", s3_d: "��̬���ۡ��ڼ��ղ��ԡ���ס�����뵭����ס������",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "͸�����ۣ������������������", adv_sub: "��ͬ��Ŀ�Ĺ�ģ����λ�����治ͬ�����ǽ���������Ϊ���ƶ���Ӫ��������ýṹ��", adv_l1: "���ð�ʵ�ʷ�����������Ʒѵ�ģʽ", adv_l2: "���ݷ��������������Ȳ�ͬ���������", adv_l3: "����ͨ��Ϊ���������25%-35%",
    panel_t: "�����׼�йܰ�", panel_d: "�ʺϼƻ����ڳ��д��������ʲ���ҵ��", panel_l1: "��ҵ�嵥��Ԥ��ģ��", panel_l2: "OTA�����뷿̬ϵͳ�", panel_l3: "�ͷ��뱣��SOPִ��", panel_l4: "�¶Ⱦ�Ӫ��������۽���", panel_cta: "ԤԼ�����ʲ�����",
    process_title: "��������", p1_t: "�ʲ����", p1_d: "ȷ�ϴ��������������ҵԼ��������Ŀ�ꡣ", p2_t: "��������", p2_d: "�����ҵ�ƻ���Ԥ�����䡢����Ӫ���ʡ�", p3_t: "������Ӫ", p3_d: "����ϼܡ��Ӵ����ͷ���������Ѳ����ϵ��", p4_t: "��������", p4_d: "���ܿ����ݣ����µ����ԣ�����������Ʒ��",
    ops_title: "��һ�н������ǣ���׼������Ӫ",
    ops_1_t: "�ռ������װ�����", ops_1_d: "����г���λ��Ŀ���Ⱥ���ṩ���ܶ����Ż�������ƣ������ռ����顣",
    ops_2_t: "������������", ops_2_d: "Э������סլ�޲���ҵ����ر���������������������ȷ���Ϸ����ߡ�",
    ops_3_t: "ͼƬ����Ƶ����", ops_3_d: "�ṩ��Ʒ����Ƭ����Ƶ�������Ż���ԴչʾЧ��������ת���ʡ�",
    ops_4_t: "�ϼ� Airbnb ��ƽ̨", ops_4_d: "��� Airbnb ������ƽ̨����פ��۸�����ƶ��������ع���������֡�",
    ops_5_t: "�ͷ���Ӫ������Ӧ", ops_5_d: "�ṩ�����ֿͷ��Ӵ���ͻ�������Ӧ������ס����������Ӫ�ȶ���",
    ops_6_t: "��ɨ������Ʒ����", ops_6_d: "��׼����ɨ�������ճ��ĲĲ��������ַ�ԴƷ���볤���ȶ���Ӫ��",
    ops_7_t: "���ߴ���������ά��", ops_7_d: "רҵ����Ͷ�����⣬�Ż�ס�͹�ͨ������������Ʒ��������",
    ops_8_t: "������������Ż�", ops_8_d: "ͨ����ס����۸����ݷ����������Ż���Ӫ���ԣ�ʵ��������󻯡�",
    lang_title: "ȫ��365�죬ÿ��24Сʱ�ṩ������֧��", lang_desc: "Ϊ����������������صĿͻ��������ṩȫ�����ݡ�24Сʱ���ߵĶ����Կͷ�֧�֣�������ѯ��Ԥ��ȷ�ϡ���סָ����ͻ�����⴦���������ķ�Դ�ڹ���ƽ̨�ϱ��ָ���ת��������ȶ����ۡ�",
    lang_1: "����", lang_2: "Ӣ��", lang_3: "����", lang_4: "����", lang_5: "����", lang_6: "����", lang_7: "������", lang_8: "������",
    bench_title: "�����ڹ�300+��Դ����Ӫʵ��", case_title: "��ʵ����", reviews_title: "�ͻ�����",
    faq_title: "��������", f1_q: "ҵ�������ձ����ܹܺ���", f1_a: "���ԡ���Զ�̾��ߣ������ڴ��汾��ִ�н������ܱ�ͬ����Ӫ���ݡ�", f2_q: "����ܽ����ȶ������ڣ�", f2_a: "ͨ�����ߺ� 1-2 ���½����ȶ����䣬������ 90 ����Ϊ�����������ڡ�", f3_q: "������μ��㣿", f3_a: "���û�������� + ��Ч�����ϣ������͡�λ�ú�Ŀ���Ⱥ���ۡ�",
    contact_title: "�ύ���淿Դ��Ϣ��48Сʱ�ڸ���ִ�з���", contact_sub: "֧������ / �ձ��Z / English��", quick_phone_label: "�绰��ѯ", quick_phone_hours: "�Ӵ�ʱ�䣺��һ������ 9:00-18:00", quick_email_label: "�ʼ���ϵ", form_name: "����", form_contact: "��ϵ��ʽ", form_asset: "��Դ��Ϣ", form_btn: "�ύ��ѯ",
    footer_desc: "רע�ձ��������޹�����Ϸ����գ��ṩ���ķ���", footer_hq: "�ܲ����ձ�������", footer_jp: "�ձ���06-7777-5524", footer_hk: "��ۣ�+852 9086 0863", footer_email: "���䣺admin@trytry.jp", footer_copy: "? <span id=\"year\"></span> Try Try. All Rights Reserved.",
    status_sending: "�����ύ�����Ժ�...", status_ok: "�ύ�ɹ������ǻᾡ����ϵ�㡣", status_fail: "�ύʧ�ܣ����Ժ����Ի�������硣", status_invalid: "����������д�����"
  },
  hk: {
    nav_services: "����", nav_advantage: "����", nav_pricing: "�r��", nav_process: "����", nav_faq: "FAQ", nav_cta: "�A�s�Jԃ",
    hero_title: "���޴��I�\����Ҏ�I�\<br/>�������һվʽ����", hero_sub: "�҂���ע����޽��I���ĺ�Ҏ�k���ƽ̨�I�\�����������ؔ�ՏͱP�Ă����棬��I���ṩ�����Ɉ��С��^�̿�׷ۙ���Y���ɽ����ĠI�\������", hero_cta_1: "�@ȡ���淽��", hero_cta_2: "�鿴300+�ڹ܌���",
    hero_k1_t: "90�솢�Ӵ���", hero_k1_d: "���L��̱����M�����_ÿ���������c��", hero_k2_t: "��ƽ̨���йܿ�", hero_k2_d: "�yһ�����桢���B�����r�c�������ԡ�", hero_k3_t: "���汾�؈���", hero_k3_d: "��ߡ�Ѳ�z���a�o��ͻ�l̎��ȫ�·��ء�",
    services_title: "���挣�����޴������", s1_t: "�_�I�c��Ҏ", s1_d: "��I�������u������Ҏ·�����h�����g�����c�Ͼ��Y���u����", s2_t: "�ճ��I�", s2_d: "�ͷ�������ס�����������Űࡢ�������Ρ��u�r�����", s3_t: "�������", s3_d: "�ӑB���r�������ղ��ԡ��BסҎ�t�c������ס������",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "͸�����r�������Ճ����`������", adv_sub: "��ͬ�Ŀ��Ҏģ����λ�c���治ͬ���҂����������󣬞����ƶ��I�\�����c�M�ýY����", adv_l1: "���ð����H���M�������Ӌ�M��ģʽ", adv_l2: "�������Ճ����c������Ȳ�ͬ���`������", adv_l3: "�M��ͨ���鷿�M�����25%-35%",
    panel_t: "����˜�Ӛ�ܰ�", panel_d: "�m��Ӌ���L�ڳ��д��������Y�a�ĘI��", panel_l1: "�_�I����c�A��ģ��", panel_l2: "OTA�Ͼ��c���Bϵ�y�", panel_l3: "�ͷ��c����SOP����", panel_l4: "�¶Ƚ��I�ͱP�c�{�r���h", panel_cta: "�A�s�����Y�a�u��",
    process_title: "��������", p1_t: "�Y�a�\��", p1_d: "�_�J����^����e����I�s���c����Ŀ�ˡ�", p2_t: "������r", p2_d: "ݔ���_�IӋ�����A��^�g�����I�\�M�ʡ�", p3_t: "�Ͼ��I�", p3_d: "����ϼܡ��Ӵ����ͷ��������cѲ�z�wϵ��", p4_t: "���m����", p4_d: "���L�������������{���ԣ����������aƷ��",
    ops_title: "��һ�н��o�҂����Ĝʂ䵽�I�",
    ops_1_t: "���g�OӋ�c�b�����", ops_1_d: "�Y���Ј���λ�cĿ�˿�Ⱥ���ṩ���܄Ӿ������c�L���OӋ���������g�w򞡣",
    ops_2_t: "����������Ո", ops_2_d: "�f���k��סլ�޲��I�����P�䰸���������������m���_���Ϸ��Ͼ���",
    ops_3_t: "�DƬ�cӰƬ�Ĕz", ops_3_d: "�ṩ��Ʒ�|��Ƭ�cӰƬ�u����������ԴչʾЧ���������D���ʡ�",
    ops_4_t: "�ϼ� Airbnb ��ƽ̨", ops_4_d: "��� Airbnb ������ƽ̨�����v�c�r������ƶ��������ع��c�����F��",
    ops_5_t: "�ͷ��I�\�c�o��푑�", ops_5_d: "�ṩ���Z�N�ͷ��Ӵ��cͻ�l��r푑�������ס���w��c�I�\������",
    ops_6_t: "����c����Ʒ����", ops_6_d: "�˜ʻ���������c�ճ��Ĳ��a�o�����ַ�ԴƷ�|�c�L�ڷ����I�\��",
    ops_7_t: "���V̎���c�u�r�S�o", ops_7_d: "���I̎��Ͷ�V���}������ס�͜�ͨ�������u���cƷ�����u��",
    ops_8_t: "����O���c���m����", ops_8_d: "͸�^��ס���c�r�񔵓����������m�����I�\���ԣ����F������󻯡�",
    lang_title: "ȫ��365�죬ÿ��24С�r�ṩ���Z��֧Ԯ", lang_desc: "������������������صĿ͑���҂��ṩȫ��o�ݡ�24С�r�ھ��Ķ��Z�Կͷ�֧Ԯ�����w�Jԃ���Aӆ�_�J����סָ����ͻ�l���}̎���������ķ�Դ�ڇ��Hƽ̨�ϱ��ָ����D�����c�������u�r��",
    lang_1: "���Z", lang_2: "Ӣ�Z", lang_3: "����", lang_4: "���Z", lang_5: "�n�Z", lang_6: "���Z", lang_7: "���m�Z", lang_8: "�R���Z",
    bench_title: "�����ڹ�300+��Դ���I�\����", case_title: "�挍����", reviews_title: "�͑��u�r",
    faq_title: "��Ҋ���}", f1_q: "�I�������ձ����ܹܺÆ᣿", f1_a: "���ԡ����h�̛Q�ߣ��҂��ڴ��汾�؈��н������L��ͬ�����I������", f2_q: "������M�뷀�������ڣ�", f2_a: "ͨ���Ͼ��� 1-2 �����M�뷀���^�g�����h�� 90 �����������u���L�ڡ�", f3_q: "�M�����Ӌ�㣿", f3_a: "���û��A�����M + ��Ч��ɽM�ϣ������͡�λ�ú�Ŀ�˿�Ⱥ���r��",
    contact_title: "�ύ���淿Դ�YӍ��48С�r�Ƚo����з���", contact_sub: "֧Ԯ���� / �ձ��Z / English��", quick_phone_label: "�Ԓ�Jԃ", quick_phone_hours: "�Ӵ��r�g���Lһ���L�� 9:00-18:00", quick_email_label: "��]�j", form_name: "����", form_contact: "�j��ʽ", form_asset: "��Դ�YӍ", form_btn: "�ύ�Jԃ",
    footer_desc: "��ע�ձ��������޹�����Ϸ����գ��ṩ���ķ��ա�", footer_hq: "�������ձ�������", footer_jp: "�ձ���06-7777-5524", footer_hk: "��ۣ�+852 9086 0863", footer_email: "��]��admin@trytry.jp", footer_copy: "? <span id=\"year\"></span> Try Try. All Rights Reserved.",
    status_sending: "�����ύ��Ո�Ժ�...", status_ok: "�ύ�ɹ����҂����M���j�㡣", status_fail: "�ύʧ����Ո������ԇ����Q�W·��", status_invalid: "Ո�����������헡�"
  },
  ja: {
    nav_services: "���`�ӥ�", nav_advantage: "����", nav_pricing: "�Ͻ�", nav_process: "����", nav_faq: "FAQ", nav_cta: "�o����Մ",
    hero_title: "���\�Ӵ���<br/>�����ȅ�����Ƥ�һ���", hero_sub: "˽���������\�Ӥ��ػ���������ꡢ�ץ�åȥե��`���\�á���߹����ؔ�ե�ӥ�`��4�Ĥ΂��椫�顢�g�Ф��䤹�����M�ä�׷�E�Ǥ����ɹ������_�˴_�J�Ǥ����\�ӥץ����ṩ���ޤ���", hero_cta_1: "�������᰸���ܤ���", hero_cta_2: "300�������\�ӌg����Ҋ��",
    hero_k1_t: "90�դ��\���_ʼ", hero_k1_d: "�L�Υޥ��륹�ȩ`����M�й����", hero_k2_t: "�}��OTA��һԪ����", hero_k2_d: "�ڎ졢����؜�ӑ��Ԥ�y�ϡ�", hero_k3_t: "����F�إ��`��", hero_k3_d: "��ߡ�Ѳ�ء��a�䡢�o�������F�ؤǌgʩ��",
    services_title: "�����ػ������\�ӥ��`�ӥ�", s1_t: "�_�I?�����", s1_d: "����\�ϡ������`���OӋ�����g�ʂ䡢���d�ز�������", s2_t: "�մΥ��ڥ�`�����", s2_d: "�����Ȍ��ꡢ�����å������ڡ�������䡢�������ꡢ��ӥ�`�����", s3_t: "����ޥͥ�����", s3_d: "�ӵā��񡢷�æ��ʩ�ߡ��B����`�롢�eɢ�ڌ��ߡ�",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "͸�����Ͻ��OӋ�����`�ӥ����ݤˏꤸ����ܛ�˘���", adv_sub: "������Ȥ�Ҏģ?�ݥ������?����Ŀ�ˤ����ʤ뤿�ᡢ�g�H�Υ˩`���˺Ϥ碌���\�ӥץ����Ͻ���ϵ���OӋ���ޤ���", adv_l1: "�g�H���޲����Ϥˌ������Ϥ��Ͻ���O��", adv_l2: "�ṩ����ȹ�����Ȥˏꤸ����ܛ���{��", adv_l3: "�M�ä�Ŀ�����޲����Ϥ�25%-35%",
    panel_t: "����˜��\�ӥѥå��`��", panel_d: "�����Y�b�����L���\�ä��������`�ʩ`��", panel_l1: "�_�I�����å��ꥹ�Ȥ�����", panel_l2: "OTA���d���ڎ쥷���ƥ�", panel_l3: "�����Ȍ���?���SOP", panel_l4: "�´Υ�ӥ�`�ȁ������", panel_cta: "�����Y�b�\�Ϥ���s",
    process_title: "����ե�`", p1_t: "�Y�b�\��", p1_d: "�����ڤ����ء���e���Ƽs��Ŀ�˅����_�J��", p2_t: "�᰸?Ҋ�e", p2_d: "�_�IӋ�������㡢�����Ϥ���ʾ��", p3_t: "�\���_ʼ", p3_d: "���d���ܤ���졢��ߡ��\�����Ƥ�ڃP��", p4_t: "�@�A����", p4_d: "�L�η������´��{�����İ��ڸ��ơ�",
    ops_title: "���٤Ƥ��Τ������������ʂ䤫���\�Ӥޤ�",
    ops_1_t: "���g�OӋ����װ�gװ", ops_1_d: "�Ј��ݥ������ȥ��`���åȿ͌Ӥ˺Ϥ碌���Ӿ��ȥǥ���������m�����ޤ���",
    ops_2_t: "���S�J����Ո", ops_2_d: "סլ�޲��I���ν��������?�����־A����֧Ԯ�����Ϸ��\�Ӥ�g�F���ޤ���",
    ops_3_t: "д��?�ӻ���Ӱ", ops_3_d: "��Ʒ�|��д��Ȅӻ��������������d�V��ȳɼs�ʤ�ߤ�ޤ���",
    ops_4_t: "Airbnb�ȤؤΒ��d", ops_4_d: "��ҪOTA�ؤγ���ȁ�����Ԥ��OӋ����¶���ȅ�������Ϥ����ޤ���",
    ops_5_t: "�������ީ`����Ⱦo������", ops_5_d: "�����Z���ݩ`�ȤȾo���r����ǡ����������Y���\�Ӱ����Ԥ�_�����ޤ���",
    ops_6_t: "���?����Ʒ����", ops_6_d: "�˜ʻ�������ߤ��ճ��a�o�ǡ�Ʒ�|�Ȱ����\�Ӥ�S�֤��ޤ���",
    ops_7_t: "����`�������u������", ops_7_d: "���錝����T�Ĥ��Ф����u���ȥ֥������m��ߤ�ޤ���",
    ops_8_t: "�����˥���󥰤Ⱦ@�A����", ops_8_d: "�ڃP�ʤȅg���ǩ`������������\�ӑ��Ԥ�@�A���m�����ޤ���",
    lang_title: "365��24�r�g�ζ����Z���ݩ`��", lang_desc: "�����ФΥ����Ȥ�@�ä��뤿�ᡢ�����365��24�r�g�ζ����Z�������ީ`���ݩ`�Ȥ��ṩ���ޤ��������Ϥ碌����s�_�J�������å������ڡ��o���r����ޤ�һ؞���ƌ��ꤷ�����H�ץ�åȥե��`��Ǥγɼs�ʤ��u���ΰ�������֧Ԯ���ޤ���",
    lang_1: "�ձ��Z", lang_2: "Ӣ�Z", lang_3: "�й��Z", lang_4: "�ɥ����Z", lang_5: "�n���Z", lang_6: "�ե���Z", lang_7: "�ݩ`�����Z", lang_8: "�ޥ�`�Z",
    bench_title: "����300�������\�ӌg��", case_title: "�g�H������", reviews_title: "ͥ�ӥ�`",
    faq_title: "�褯�����|��", f1_q: "���`�ʩ`���ձ��ˤ��ʤ��Ƥ��\�ӿ��ܤǤ�����", f1_a: "���ܤǤ�����˼�Q�����h��ǡ��g�Фϴ���F�ؤ��Ф��ޤ���", f2_q: "��������ޤǤ�Ŀ���ϣ�", f2_a: "ͨ�����\���_ʼ��1-2���¤ǰ���������90�դ��u�����ޤ���", f3_q: "�Ͻ���ϵ�ϣ�", f3_a: "���������M + �ɹ��B�Ӥǡ���������ˏꤸ���OӋ���ޤ���",
    contact_title: "��������������Ť���������48�r�g���ڤˌg�а�����ʾ", contact_sub: "���� / �ձ��Z / English ���ꡣ", quick_phone_label: "�Ԓ����Մ", quick_phone_hours: "�ܸ��r�g����?�� 9:00-18:00", quick_email_label: "��`����B�j", form_name: "����ǰ", form_contact: "�B�j��", form_asset: "������", form_btn: "����",
    footer_desc: "��������\�Ӥ��ػ����Ϸ��饤���󥹤��й��Z������ṩ��", footer_hq: "���磺�����У��ձ���", footer_jp: "�ձ���06-7777-5524", footer_hk: "��ۣ�+852 9086 0863", footer_email: "��`�룺admin@trytry.jp", footer_copy: "? <span id=\"year\"></span> Try Try. All Rights Reserved.",
    status_sending: "�����ФǤ����١���������������...", status_ok: "�������ˤ��ޤ�����������ꤴ�B�j���ޤ���", status_fail: "���Ť�ʧ�����ޤ������r�g�򤪤�����ԇ�Ф��Ƥ���������", status_invalid: "����Ŀ���������Ƥ���������"
  },
  en: {
    nav_services: "Services", nav_advantage: "Advantages", nav_pricing: "Pricing", nav_process: "Process", nav_faq: "FAQ", nav_cta: "Contact",
    hero_title: "Minpaku Management<br/>Compliance-led launch, revenue-led growth", hero_sub: "We specialize in minpaku operations, covering four areas: compliance setup, platform operations, cleaning management, and financial review. We deliver plans that are clear to execute, trackable in process, and measurable in outcomes.", hero_cta_2: "View 300+ Managed Results",
    hero_k1_t: "90-day launch window", hero_k1_d: "Weekly milestones with clear deliverables.", hero_k2_t: "Unified OTA control", hero_k2_d: "Centralized inventory, pricing, and channel strategy.", hero_k3_t: "On-ground Osaka team", hero_k3_d: "Cleaning, inspections, replenishment, and incident response.",
    services_title: "Osaka-Focused Management Services", s1_t: "Opening & Compliance", s1_d: "Feasibility check, compliance route, setup planning, listing assets.", s2_t: "Daily Operations", s2_d: "Guest messaging, check-in flow, cleaning schedule, issue handling, review ops.", s3_t: "Revenue Management", s3_d: "Dynamic pricing, holiday playbook, length-of-stay rules, low-season demand lift.",
    pricing_eyebrow: "Transparent Pricing",
    adv_title: "Transparent Pricing, Flexible by Service Scope", adv_sub: "Each project differs in scale, positioning, and revenue goals, so we tailor the operating plan and fee structure to your actual needs.", adv_l1: "Fees are calculated as a percentage of actual room revenue", adv_l2: "Flexibly configured by service scope and management depth", adv_l3: "Typical fee range: 25%-35% of room revenue",
    panel_t: "Osaka Standard Pack", panel_d: "For owners building long-term Osaka STR assets", panel_l1: "Opening checklist and budget model", panel_l2: "OTA launch and inventory setup", panel_l3: "Guest and cleaning SOP delivery", panel_l4: "Monthly reviews and pricing actions", panel_cta: "Book Osaka Asset Review",
    process_title: "Engagement Process", p1_t: "Asset Diagnosis", p1_d: "Define Osaka location, constraints, and revenue target.", p2_t: "Proposal", p2_d: "Launch plan, budget range, and management fee model.", p3_t: "Go Live", p3_d: "Listings, support, cleaning, and inspection systems live.", p4_t: "Scale Revenue", p4_d: "Weekly analytics, monthly optimization, quarterly upgrades.",
    ops_title: "Leave Everything to Us, From Setup to Operations",
    ops_1_t: "Space Design & Fit-out Delivery", ops_1_d: "We optimize layout flow and visual style based on target guests and market positioning.",
    ops_2_t: "Minpaku License Application", ops_2_d: "We support legal filing, fire-safety, and administrative procedures for compliant launch.",
    ops_3_t: "Photo & Video Production", ops_3_d: "High-quality visuals improve listing appeal and conversion performance.",
    ops_4_t: "Airbnb and OTA Onboarding", ops_4_d: "We launch your listing on major platforms with pricing strategy setup.",
    ops_5_t: "Guest Support & Emergency Response", ops_5_d: "Multilingual support and urgent issue handling keep operations stable.",
    ops_6_t: "Cleaning & Supply Management", ops_6_d: "Standardized cleaning and consumables replenishment maintain quality consistency.",
    ops_7_t: "Complaint Handling & Review Care", ops_7_d: "We resolve complaints professionally and protect ratings and brand trust.",
    ops_8_t: "Revenue Monitoring & Optimization", ops_8_d: "We optimize strategy continuously using occupancy and pricing data.",
    lang_title: "Multilingual Support 24/7, 365 Days a Year", lang_desc: "To attract guests from around the world, we provide always-on multilingual support for inquiries, booking confirmation, check-in guidance, and urgent issue handling, helping your listing keep stronger conversion and more stable ratings.",
    lang_1: "Japanese", lang_2: "English", lang_3: "Chinese", lang_4: "German", lang_5: "Korean", lang_6: "French", lang_7: "Polish", lang_8: "Malay",
    bench_title: "300+ Managed Units in Osaka | Operating Proof", case_title: "Real Cases", reviews_title: "Customer Reviews",
    faq_title: "FAQ", f1_q: "Can this work if the owner is overseas?", f1_a: "Yes. You approve key decisions remotely; we execute operations on-site in Osaka.", f2_q: "How long to reach stable performance?", f2_a: "Most units stabilize within 1-2 months after launch, measured over a 90-day cycle.", f3_q: "How is pricing structured?", f3_a: "Base management fee plus performance component, tailored by asset profile.",
    contact_title: "Send your Osaka property brief. We reply within 48 hours.", contact_sub: "Chinese / Japanese / English support.", quick_phone_label: "Call Us", quick_phone_hours: "Service hours: Mon-Fri 9:00-18:00", quick_email_label: "Email Us", form_name: "Name", form_contact: "Contact", form_asset: "Property Brief", form_btn: "Submit",
    footer_desc: "Focused on Osaka minpaku management with licensed, Chinese-friendly local operations.", footer_hq: "HQ: Osaka, Japan", footer_jp: "Japan: 06-7777-5524", footer_hk: "Hong Kong: +852 9086 0863", footer_email: "Email: admin@trytry.jp", footer_copy: "? <span id=\"year\"></span> Try Try. All Rights Reserved.",
    status_sending: "Submitting, please wait...", status_ok: "Submitted successfully. We will contact you soon.", status_fail: "Submission failed. Please try again later.", status_invalid: "Please fill in all required fields."
  }
};

let currentLang = "zh";

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function renderCards(containerId, items, renderer) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = (items || []).map(renderer).join("");
}

function renderPortfolio(lang) {
  const source = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA[lang]) || (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.zh);
  if (!source) return;

  renderCards("stats-strip", source.stats, (item) => `
    <article class="card">
      <h3>${escapeHtml(item.value)}</h3>
      <p>${escapeHtml(item.label)}</p>
    </article>
  `);

  renderCards("district-grid", source.districts, (item) => `
    <article class="card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.desc)}</p>
    </article>
  `);

  renderCards("unit-grid", source.units, (item) => `
    <article class="card">
      <div class="unit-image-wrap">
        <img src="${escapeHtml(item.image || "")}" alt="${escapeHtml(item.title)}" loading="lazy" />
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="unit-desc">${escapeHtml(item.desc)}</p>
    </article>
  `);

  renderCards("review-grid", source.reviews, (item) => `
    <article class="card review-card">
      <p class="review-quote">��${escapeHtml(item.quote)}��</p>
      <p class="review-source">${escapeHtml(item.source)}</p>
    </article>
  `);
}

function setLang(lang) {
  currentLang = lang;
  const dict = i18n[lang] || i18n.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : (lang === "hk" ? "zh-HK" : lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (!val) return;
    el.innerHTML = val;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderPortfolio(lang);
}

function setStatus(key, type) {
  const status = document.getElementById("form-status");
  if (!status) return;
  status.className = `form-status ${type || ""}`.trim();
  status.textContent = i18n[currentLang][key] || "";
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang || "zh"));
});

const leadForm = document.getElementById("lead-form");
if (leadForm) {
  leadForm.action = `https://formsubmit.co/${encodeURIComponent(FORM_RECEIVER_EMAIL)}`;
  leadForm.method = "POST";
  leadForm.addEventListener("submit", (event) => {
    if (!leadForm.checkValidity()) {
      event.preventDefault();
      setStatus("status_invalid", "error");
      leadForm.reportValidity();
      return;
    }
    setStatus("status_sending", "pending");
  });
}

setLang("zh");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXXXXXXXXX")) {
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

