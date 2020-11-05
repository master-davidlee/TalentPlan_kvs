(function() {var implementors = {};
implementors["ansi_term"] = [{"text":"impl Send for Prefix","synthetic":true,"types":[]},{"text":"impl Send for Infix","synthetic":true,"types":[]},{"text":"impl Send for Suffix","synthetic":true,"types":[]},{"text":"impl Send for Style","synthetic":true,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized&gt; Send for ANSIGenericString&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized&gt; Send for ANSIGenericStrings&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Colour","synthetic":true,"types":[]}];
implementors["atty"] = [{"text":"impl Send for Stream","synthetic":true,"types":[]}];
implementors["clap"] = [{"text":"impl&lt;'a, 'b&gt; !Send for App&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; !Send for Arg&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ArgGroup&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ArgMatches&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for OsValues&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SubCommand&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Values&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for AppSettings","synthetic":true,"types":[]},{"text":"impl Send for ArgSettings","synthetic":true,"types":[]},{"text":"impl Send for Shell","synthetic":true,"types":[]},{"text":"impl Send for ErrorKind","synthetic":true,"types":[]}];
implementors["kvs"] = [{"text":"impl Send for KvStore","synthetic":true,"types":[]}];
implementors["libc"] = [{"text":"impl !Send for group","synthetic":true,"types":[]},{"text":"impl Send for utimbuf","synthetic":true,"types":[]},{"text":"impl Send for timeval","synthetic":true,"types":[]},{"text":"impl Send for timespec","synthetic":true,"types":[]},{"text":"impl Send for rlimit","synthetic":true,"types":[]},{"text":"impl Send for rusage","synthetic":true,"types":[]},{"text":"impl Send for ipv6_mreq","synthetic":true,"types":[]},{"text":"impl !Send for hostent","synthetic":true,"types":[]},{"text":"impl !Send for iovec","synthetic":true,"types":[]},{"text":"impl Send for pollfd","synthetic":true,"types":[]},{"text":"impl Send for winsize","synthetic":true,"types":[]},{"text":"impl Send for linger","synthetic":true,"types":[]},{"text":"impl !Send for sigval","synthetic":true,"types":[]},{"text":"impl Send for itimerval","synthetic":true,"types":[]},{"text":"impl Send for tms","synthetic":true,"types":[]},{"text":"impl !Send for servent","synthetic":true,"types":[]},{"text":"impl !Send for protoent","synthetic":true,"types":[]},{"text":"impl Send for in_addr","synthetic":true,"types":[]},{"text":"impl Send for ip_mreq","synthetic":true,"types":[]},{"text":"impl Send for ip_mreq_source","synthetic":true,"types":[]},{"text":"impl Send for sockaddr","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_in","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_in6","synthetic":true,"types":[]},{"text":"impl !Send for addrinfo","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_ll","synthetic":true,"types":[]},{"text":"impl Send for fd_set","synthetic":true,"types":[]},{"text":"impl !Send for tm","synthetic":true,"types":[]},{"text":"impl Send for sched_param","synthetic":true,"types":[]},{"text":"impl !Send for Dl_info","synthetic":true,"types":[]},{"text":"impl !Send for lconv","synthetic":true,"types":[]},{"text":"impl Send for in_pktinfo","synthetic":true,"types":[]},{"text":"impl !Send for ifaddrs","synthetic":true,"types":[]},{"text":"impl Send for in6_rtmsg","synthetic":true,"types":[]},{"text":"impl Send for arpreq","synthetic":true,"types":[]},{"text":"impl Send for arpreq_old","synthetic":true,"types":[]},{"text":"impl Send for arphdr","synthetic":true,"types":[]},{"text":"impl !Send for mmsghdr","synthetic":true,"types":[]},{"text":"impl Send for epoll_event","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_un","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_storage","synthetic":true,"types":[]},{"text":"impl Send for utsname","synthetic":true,"types":[]},{"text":"impl !Send for sigevent","synthetic":true,"types":[]},{"text":"impl Send for rlimit64","synthetic":true,"types":[]},{"text":"impl !Send for glob_t","synthetic":true,"types":[]},{"text":"impl !Send for passwd","synthetic":true,"types":[]},{"text":"impl !Send for spwd","synthetic":true,"types":[]},{"text":"impl Send for dqblk","synthetic":true,"types":[]},{"text":"impl Send for signalfd_siginfo","synthetic":true,"types":[]},{"text":"impl Send for itimerspec","synthetic":true,"types":[]},{"text":"impl Send for fsid_t","synthetic":true,"types":[]},{"text":"impl Send for packet_mreq","synthetic":true,"types":[]},{"text":"impl Send for cpu_set_t","synthetic":true,"types":[]},{"text":"impl !Send for if_nameindex","synthetic":true,"types":[]},{"text":"impl Send for msginfo","synthetic":true,"types":[]},{"text":"impl Send for sembuf","synthetic":true,"types":[]},{"text":"impl Send for input_event","synthetic":true,"types":[]},{"text":"impl Send for input_id","synthetic":true,"types":[]},{"text":"impl Send for input_absinfo","synthetic":true,"types":[]},{"text":"impl Send for input_keymap_entry","synthetic":true,"types":[]},{"text":"impl Send for input_mask","synthetic":true,"types":[]},{"text":"impl Send for ff_replay","synthetic":true,"types":[]},{"text":"impl Send for ff_trigger","synthetic":true,"types":[]},{"text":"impl Send for ff_envelope","synthetic":true,"types":[]},{"text":"impl Send for ff_constant_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_ramp_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_condition_effect","synthetic":true,"types":[]},{"text":"impl !Send for ff_periodic_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_rumble_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_effect","synthetic":true,"types":[]},{"text":"impl !Send for dl_phdr_info","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Ehdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Ehdr","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Sym","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Sym","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Phdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Phdr","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Shdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Shdr","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Chdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Chdr","synthetic":true,"types":[]},{"text":"impl Send for ucred","synthetic":true,"types":[]},{"text":"impl !Send for mntent","synthetic":true,"types":[]},{"text":"impl !Send for posix_spawn_file_actions_t","synthetic":true,"types":[]},{"text":"impl Send for posix_spawnattr_t","synthetic":true,"types":[]},{"text":"impl Send for genlmsghdr","synthetic":true,"types":[]},{"text":"impl Send for in6_pktinfo","synthetic":true,"types":[]},{"text":"impl Send for arpd_request","synthetic":true,"types":[]},{"text":"impl Send for inotify_event","synthetic":true,"types":[]},{"text":"impl Send for fanotify_response","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_vm","synthetic":true,"types":[]},{"text":"impl Send for regmatch_t","synthetic":true,"types":[]},{"text":"impl Send for sock_extended_err","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_nl","synthetic":true,"types":[]},{"text":"impl Send for dirent","synthetic":true,"types":[]},{"text":"impl Send for dirent64","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_alg","synthetic":true,"types":[]},{"text":"impl Send for af_alg_iv","synthetic":true,"types":[]},{"text":"impl Send for mq_attr","synthetic":true,"types":[]},{"text":"impl Send for statx","synthetic":true,"types":[]},{"text":"impl Send for statx_timestamp","synthetic":true,"types":[]},{"text":"impl !Send for aiocb","synthetic":true,"types":[]},{"text":"impl Send for __exit_status","synthetic":true,"types":[]},{"text":"impl Send for __timeval","synthetic":true,"types":[]},{"text":"impl !Send for glob64_t","synthetic":true,"types":[]},{"text":"impl !Send for msghdr","synthetic":true,"types":[]},{"text":"impl Send for cmsghdr","synthetic":true,"types":[]},{"text":"impl Send for termios","synthetic":true,"types":[]},{"text":"impl Send for mallinfo","synthetic":true,"types":[]},{"text":"impl Send for nlmsghdr","synthetic":true,"types":[]},{"text":"impl Send for nlmsgerr","synthetic":true,"types":[]},{"text":"impl Send for nl_pktinfo","synthetic":true,"types":[]},{"text":"impl Send for nl_mmap_req","synthetic":true,"types":[]},{"text":"impl Send for nl_mmap_hdr","synthetic":true,"types":[]},{"text":"impl Send for nlattr","synthetic":true,"types":[]},{"text":"impl !Send for rtentry","synthetic":true,"types":[]},{"text":"impl Send for timex","synthetic":true,"types":[]},{"text":"impl Send for ntptimeval","synthetic":true,"types":[]},{"text":"impl !Send for regex_t","synthetic":true,"types":[]},{"text":"impl Send for utmpx","synthetic":true,"types":[]},{"text":"impl Send for sigset_t","synthetic":true,"types":[]},{"text":"impl Send for sysinfo","synthetic":true,"types":[]},{"text":"impl Send for msqid_ds","synthetic":true,"types":[]},{"text":"impl Send for sigaction","synthetic":true,"types":[]},{"text":"impl Send for statfs","synthetic":true,"types":[]},{"text":"impl Send for flock","synthetic":true,"types":[]},{"text":"impl Send for flock64","synthetic":true,"types":[]},{"text":"impl Send for siginfo_t","synthetic":true,"types":[]},{"text":"impl !Send for stack_t","synthetic":true,"types":[]},{"text":"impl Send for stat","synthetic":true,"types":[]},{"text":"impl Send for stat64","synthetic":true,"types":[]},{"text":"impl Send for statfs64","synthetic":true,"types":[]},{"text":"impl Send for statvfs64","synthetic":true,"types":[]},{"text":"impl Send for pthread_attr_t","synthetic":true,"types":[]},{"text":"impl Send for _libc_fpxreg","synthetic":true,"types":[]},{"text":"impl Send for _libc_xmmreg","synthetic":true,"types":[]},{"text":"impl Send for _libc_fpstate","synthetic":true,"types":[]},{"text":"impl Send for user_regs_struct","synthetic":true,"types":[]},{"text":"impl !Send for user","synthetic":true,"types":[]},{"text":"impl !Send for mcontext_t","synthetic":true,"types":[]},{"text":"impl Send for ipc_perm","synthetic":true,"types":[]},{"text":"impl Send for shmid_ds","synthetic":true,"types":[]},{"text":"impl Send for termios2","synthetic":true,"types":[]},{"text":"impl Send for ip_mreqn","synthetic":true,"types":[]},{"text":"impl Send for user_fpregs_struct","synthetic":true,"types":[]},{"text":"impl !Send for ucontext_t","synthetic":true,"types":[]},{"text":"impl Send for statvfs","synthetic":true,"types":[]},{"text":"impl Send for max_align_t","synthetic":true,"types":[]},{"text":"impl Send for sem_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_mutexattr_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_rwlockattr_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_condattr_t","synthetic":true,"types":[]},{"text":"impl Send for fanotify_event_metadata","synthetic":true,"types":[]},{"text":"impl Send for pthread_cond_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_mutex_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_rwlock_t","synthetic":true,"types":[]},{"text":"impl Send for in6_addr","synthetic":true,"types":[]},{"text":"impl Send for DIR","synthetic":true,"types":[]},{"text":"impl Send for FILE","synthetic":true,"types":[]},{"text":"impl Send for fpos_t","synthetic":true,"types":[]},{"text":"impl Send for timezone","synthetic":true,"types":[]},{"text":"impl Send for fpos64_t","synthetic":true,"types":[]}];
implementors["strsim"] = [{"text":"impl Send for StrSimError","synthetic":true,"types":[]}];
implementors["textwrap"] = [{"text":"impl Send for HyphenSplitter","synthetic":true,"types":[]},{"text":"impl Send for NoHyphenation","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Send for Wrapper&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Send for IntoWrapIter&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'w, 'a, S&gt; Send for WrapIter&lt;'w, 'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V&gt; Send for VecMap&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for VacantEntry&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for OccupiedEntry&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for Iter&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for IterMut&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for Keys&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for Values&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for ValuesMut&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; Send for IntoIter&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for Drain&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for Entry&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()