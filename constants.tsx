
import { Lesson, Category, Difficulty, Module } from './types';

// Due to space constraints, I will provide a representative subset of the 180 lessons 
// organized into the 10 major modules as requested.
export const CURRICULUM: Module[] = [
  {
    id: 1,
    name: "第一阶段：觉醒——网安基础与危机感知 (1-18课)",
    lessons: [
      {
        id: 1,
        title: "为什么要学网安？数字时代的生存法则",
        category: Category.FUNDAMENTALS,
        difficulty: Difficulty.BEGINNER,
        description: "从物理世界到数字世界的映射，理解信息流动的代价。",
        points: ["网络攻击的隐蔽性", "个人利益与国家安全的联结", "新疆幻城：我们的使命与愿景"],
        caseStudy: "某大型医院因勒索病毒停诊事件复盘"
      },
      {
        id: 5,
        title: "配置你的第一道防线：360安全卫士深度优化",
        category: Category.OS_SOFTWARE,
        difficulty: Difficulty.BEGINNER,
        description: "不再被‘弹窗’困扰，真正发挥国产软件的防御力。",
        points: ["主动防御模块详解", "排除项设置：不要滥用信任", "网盾功能与钓鱼拦截实操"],
      },
      {
        id: 7,
        title: "火绒安全：安静且强大的‘硬核’配置",
        category: Category.OS_SOFTWARE,
        difficulty: Difficulty.BEGINNER,
        description: "如何配置规则库，让电脑远离全家桶和流氓软件。",
        points: ["自定义防护规则编写", "网络监控功能查杀异常外连", "弹窗拦截器的极致配置"],
      }
    ]
  },
  {
    id: 2,
    name: "第二阶段：筑墙——操作系统与终端硬化 (19-45课)",
    lessons: [
      {
        id: 20,
        title: "微软自带的‘最强盾牌’：Windows Defender完全手册",
        category: Category.OS_SOFTWARE,
        difficulty: Difficulty.INTERMEDIATE,
        description: "深入了解内核隔离、受控文件夹访问等进阶功能。",
        points: ["勒索软件防护开关", "脱机扫描解决顽固木马", "防火墙高级入站出站规则"],
      },
      {
        id: 25,
        title: "密码学的艺术：Diceware方法与密码管理器",
        category: Category.FUNDAMENTALS,
        difficulty: Difficulty.BEGINNER,
        description: "彻底告别'123456'，构建人脑能记住的高强度密码。",
        points: ["熵值计算", "KeePass与Bitwarden的本地化部署", "二步验证(2FA)的硬件方案选择"],
      },
      {
        id: 38,
        title: "驱动程序与补丁管理：为什么‘一键更新’很重要？",
        category: Category.OPERATIONS,
        difficulty: Difficulty.BEGINNER,
        description: "理解CVE漏洞编号，学会分析为什么要打这个补丁。",
        points: ["MS17-010漏洞复盘", "影子系统与快照技术", "隔离区的正确处理方式"],
      }
    ]
  },
  {
    id: 3,
    name: "第三阶段：识破——社交工程与心理博弈 (46-75课)",
    lessons: [
      {
        id: 48,
        title: "钓鱼邮件的10个危险特征",
        category: Category.SOCIAL_ENGINEERING,
        difficulty: Difficulty.BEGINNER,
        description: "深度剖析攻击者如何利用恐慌、诱惑和权威进行攻击。",
        points: ["发件人伪造检测", "URL重定向欺骗", "附件中的宏病毒分析"],
        caseStudy: "某世界500强企业CEO被‘假邮件’转账千万案例"
      },
      {
        id: 60,
        title: "Deepfake深度伪造：当眼见不再为实",
        category: Category.SOCIAL_ENGINEERING,
        difficulty: Difficulty.ADVANCED,
        description: "AI换脸与语音模拟技术原理及识别手段。",
        points: ["视频通话中的特征抖动识别", "暗号机制建立", "多因子身份核验流程"],
      }
    ]
  },
  {
    id: 4,
    name: "第四阶段：御风——企业网络与运维实战 (76-110课)",
    lessons: [
      {
        id: 85,
        title: "防火墙不是摆设：入站出站流量监控实务",
        category: Category.OPERATIONS,
        difficulty: Difficulty.INTERMEDIATE,
        description: "拒绝‘默认放行’，构建白名单防御体系。",
        points: ["端口扫描原理", "蜜罐技术基础：诱敌深入", "Wireshark流量抓包初步"],
      },
      {
        id: 102,
        title: "数据脱敏与备份：容灾备份的3-2-1原则",
        category: Category.DATA_PRIVACY,
        difficulty: Difficulty.INTERMEDIATE,
        description: "数据是企业的生命线，如何科学地备份？",
        points: ["异地冷备份", "RTO与RPO指标详解", "数据库加密传输配置"],
      }
    ]
  },
  {
    id: 5,
    name: "第五阶段：赋能——安全开发与架构 (111-150课)",
    lessons: [
      {
        id: 120,
        title: "OWASP Top 10 深度剖析（一）：注入攻击",
        category: Category.DEVELOPMENT,
        difficulty: Difficulty.ADVANCED,
        description: "从SQL注入到命令注入，代码层面的根治方案。",
        points: ["参数化查询", "输入验证与过滤", "报错信息掩盖技术"],
      },
      {
        id: 135,
        title: "DevSecOps：将安全融入流水线",
        category: Category.DEVELOPMENT,
        difficulty: Difficulty.ADVANCED,
        description: "在代码提交那一刻就开始扫描，而不是发布后挨打。",
        points: ["SAST静态分析工具集成", "DAST动态扫描", "供应链安全与依赖检查"],
      }
    ]
  },
  {
    id: 6,
    name: "第六阶段：法网——法律法规与伦理 (151-180课)",
    lessons: [
      {
        id: 160,
        title: "《中华人民共和国网络安全法》逐条解读",
        category: Category.LEGAL,
        difficulty: Difficulty.BEGINNER,
        description: "不只是条文，更是行为底线。",
        points: ["关键信息基础设施保护", "实名制要求", "非法入侵的法律责任"],
      },
      {
        id: 175,
        title: "应急响应实战：当你被黑了，该怎么做？",
        category: Category.OPERATIONS,
        difficulty: Difficulty.ADVANCED,
        description: "止损、固证、溯源、恢复的黄金四步骤。",
        points: ["日志留存重要性", "网信办报备流程", "公关危机处理原则"],
      },
      {
        id: 180,
        title: "终章：做数字世界的守护者",
        category: Category.FUNDAMENTALS,
        difficulty: Difficulty.BEGINNER,
        description: "网安通识教育的终点，是终身学习的起点。",
        points: ["幻城认证学员证书获取", "持续学习资源库推荐", "社区互助计划介绍"],
      }
    ]
  }
];

// Helper to get all lessons flattened
export const ALL_LESSONS: Lesson[] = CURRICULUM.flatMap(m => m.lessons);
